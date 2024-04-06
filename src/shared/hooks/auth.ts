import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router";

const useAuth = () => {
    const navigate = useNavigate();
    const signIn = async (form: object) => {
        try {
           const response = await axios.post('http://localhost:5000/api/auth/register', form)
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

    const logIn = async (form: object) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', form)
            toast.success('Successfully toasted!')
            setTimeout(() => {
                navigate('/todoList-form')
            },2000)

            console.log('suucsses')
        }catch (e) {
            // @ts-ignore
            toast.error(`${e.message}`)
            console.log(e,'error')
        }

    };

    return { signIn, logIn };

};

export default useAuth;