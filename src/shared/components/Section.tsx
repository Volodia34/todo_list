import React from 'react';
import {TextField} from "@mui/material";
import TodoButton from "./buttons/Button";

const Section = () => {
    return (
        <section className='section'>
            <h1 className='h1'>TODOS</h1>
            <TodoButton click={() => undefined} variant='contained' size='large'>Create</TodoButton>
        </section>
    );
};

export default Section;