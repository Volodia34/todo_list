import React from 'react';
import TodoButton from "../shared/components/buttons/Button";

const Header = () => {
    return (
        <header>
            <p>Todo-list</p>
            <div className='header__button'>
                <TodoButton variant='text' size='large' click={() => undefined }>Sign In</TodoButton>
                <TodoButton variant='text' size='large' click={() => undefined }>Sign Up</TodoButton>
            </div>
        </header>
    );
};

export default Header;