import React from 'react';
import {Button} from "@mui/material";
import {ButtonInterface} from "./inteface/button.interface";


const TodoButton: React.FC<ButtonInterface> = ({children,click}) => {
    return (
        <Button variant="contained" onClick={click} style={{margin: '10px'}}>{children}</Button>

    );
};

export default TodoButton;