import React from 'react';
import {Button} from "@mui/material";
import {ButtonInterface} from "./inteface/button.interface";


const TodoButton: React.FC<ButtonInterface> = ({children,click,size,variant}) => {
    return (
        <Button variant={variant} size={size} onClick={click} className='button'>{children}</Button>

    );
};

export default TodoButton;