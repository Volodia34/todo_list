import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useToken from "./Token";
import {useNavigate} from "react-router";

const useFetch = (url: string): [boolean, any, any, (options: any, navigateTo: string) => void] => {
    const baseUrl = 'http://localhost:5000';
    const { setToken } = useToken();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [navigateTo, setNavigateTo] = useState('');

    const doFetch = (options: any, navigateTo: string) => {
        setOptions(options);
        setIsLoading(true);
        setNavigateTo(navigateTo);
    };

    useEffect(() => {
        if (!isLoading) {
            return;
        }
        axios(baseUrl + url, options)
            .then((res) => {
                setIsLoading(false);
                setResponse(res.data);
                toast.success('Successfully toasted!');
                setTimeout(() => {
                    navigate(navigateTo);
                }, 2000);
                if (res.data.token) {
                    setToken(res.data.token);



                }
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
                console.log(err)
                toast.error(err.message || 'An error occurred');
            });
    }, [isLoading]);

    return [isLoading, response, error, doFetch];
};

export default useFetch;