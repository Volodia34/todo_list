import React from 'react';
import TodoButton from "./buttons/Button";

interface SectionProps {
 click: () => void
}

const Section: React.FC<SectionProps> = ({click}) => {


    return (
        <section className='section'>
            <h1 className='h1'>TODOS</h1>
            <TodoButton click={click} variant='contained' size='large'>Create</TodoButton>
        </section>
    );
};

export default Section;