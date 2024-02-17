import React from 'react';
import {Card, CardContent} from "@mui/material";
import {FC} from "react";
import {ListProps} from "./List.interface";
import TodoButton from "../buttons/Button";



const List: FC<ListProps> = ({ title,text,delite,edit}) => {
    return (
        <Card style={{width: '200px', }}>
            <CardContent>
                <h2>{title}</h2>
                <p>{text}</p>
                <TodoButton click={delite}>delete</TodoButton>
                <TodoButton click={edit}>edit</TodoButton>

            </CardContent>
        </Card>
    );
};

export default List;