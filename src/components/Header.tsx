import React from 'react';
import {Link} from "react-router-dom";
import useToken from "../shared/hooks/Token";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import TodoButton from "../shared/components/buttons/Button";

const Header = () => {
    const { getToken, setToken } = useToken();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
       navigate('/login');
    };

    const token = getToken();

    return (
        <header>
            <Link to={token ? '/todoList-form' : '/login'}><p>Todo-list</p></Link>
            <div className='header__button'>
                {/* Перевірка чи є токен */}
                {token ? (
                    <Button variant="outlined" style={{ marginTop: '10px',color: 'white',borderColor: 'white'}} onClick={handleLogout}>Logout</Button>
                ) : (
                    <>
                        <Link to='/login'><TodoButton variant='text' size='large' click={() => undefined }>Sign In</TodoButton></Link>
                        <Link to='/register'><TodoButton variant='text' size='large' click={() => undefined }>Sign Up</TodoButton></Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;