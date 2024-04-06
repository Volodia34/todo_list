import {useLocalStorage} from "./Storage";

const useToken = () => {
    const {setItem,getItem} = useLocalStorage()
    const getToken = () => {
        return getItem('auth-token')
    }

    const setToken = (token:string) => {
        return setItem('auth-token',token)
    }


    return {getToken,setToken}

};

export default useToken;