import React from 'react';
import TodoButton from "../shared/components/buttons/Button";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/todoList-form'><p>Todo-list</p></Link>
            <div className='header__button'>
                <Link to='/login'><TodoButton variant='text' size='large' click={() => undefined }>Sign In</TodoButton></Link>
                <Link to='/register'><TodoButton variant='text' size='large' click={() => undefined }>Sign Up</TodoButton></Link>
            </div>
        </header>
    );
};

export default Header;