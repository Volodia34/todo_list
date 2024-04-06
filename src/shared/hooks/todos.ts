import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router";

export const useTodos = () => {
    const navigate = useNavigate();
    const getAll = async (data: object) => {
        try {
            const response = await axios.post('http://localhost:5000/api/todo', data)
            toast.success('Successfully toasted!')
            setTimeout(() => {
                navigate('/login')
            },2000)
            console.log('suucsses')

        }catch (e) {
            // @ts-ignore
            toast.error(`${e.message}`)
            console.log(e,'error')
        }

    };

    const getItem = (key: string) => {
        return localStorage.getItem(key);
    };

    return { getAll, getItem };
};
