import React, {FC, useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import Header from "../../../components/Header";
import {Toaster} from "react-hot-toast";
import useFetch from "../../hooks/useFetch";

interface AuthenticationProps {
    register: boolean;
    onLoginSuccess?: () => void; // робимо onLoginSuccess необов'язковим
}
const Authentication: FC<AuthenticationProps> = ({ register }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [serverError, setServerError] = useState<string>('');

    const [isLoading, response, error, doFetch] = useFetch(register ? '/api/auth/register' : '/api/auth/login');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === "email") {
            setEmail(value);
            setEmailError(prevState => {
                if (value.length === 0) {
                    return 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'Invalid email format';
                }
                return '';
            });
        } else if (id === "password") {
            setPassword(value);
            setPasswordError(value.length >= 6 ? '' : 'Password must be at least 6 characters');
        }
    };

    const handleSubmit = () => {
        const endpoint = register ? '/login' : '/todoList-form';
        doFetch({
            method: 'post',
            data: {
                email: email,
                password: password
            }
        }, endpoint);
    };

    useEffect(() => {
        if (error) {
            setServerError(error.message); // Ваш серверный error обычно содержит поле message, где находится текст ошибки
            console.log(error.message)
        } else {
            setServerError('');
        }
    }, [error]);

    return (
        <>
            <Header />
            <form className='authentication-from'>
                <h1>{register ? 'Register' : 'Login'}</h1>
                <div>
                    <TextField
                        id="email"
                        label="Your email"
                        variant="standard"
                        error={!!emailError || !!serverError}
                        helperText={emailError || serverError || ''}
                        style={{ width: '350px', height: '70px' }}
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        type="password"
                        label="Your password"
                        variant="standard"
                        error={!!passwordError || !!serverError}
                        helperText={passwordError || serverError || ''}
                        style={{ width: '350px', height: '80px' }}
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        size='medium'
                        onClick={handleSubmit}
                        disabled={!email || !password || !!emailError || !!passwordError || isLoading}
                    >
                        Submit
                    </Button>
                </div>
            </form>
           <Toaster/>
        </>
    );
};

export default Authentication;
