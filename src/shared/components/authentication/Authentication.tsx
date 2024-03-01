import React, {FC, useState} from 'react';
import {Button, TextField} from "@mui/material";
import Header from "../../../components/Header";
import {useNavigate} from "react-router";
import {useLocalStorage} from "../../hooks/Storage";
import toast,{Toaster} from "react-hot-toast";
import useAuth from "../../hooks/auth";

interface AuthenticationProps {
    register: boolean
}

const Authentication: FC<AuthenticationProps> = ({ register }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const {signIn,logIn} = useAuth()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);

        if (value.length === 0) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError(value.length >= 6 ? '' : 'Password must be at least 6 characters');
    };


    const handleSubmit = () => {
        if(register) {
            signIn({email: email,password: password})
        }else  {
            logIn({email: email,password: password})
        }

    }

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
                        error={!!emailError}
                        helperText={emailError}
                        style={{ width: '350px', height: '70px' }}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        type="password"
                        label="Your password"
                        variant="standard"
                        error={!!passwordError}
                        helperText={passwordError}
                        style={{ width: '350px', height: '80px' }}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        size='medium'
                        onClick={handleSubmit}
                        disabled={!email || !password || !!emailError || !!passwordError}
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
