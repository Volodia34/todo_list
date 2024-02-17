import React from 'react';


interface CardProps {
    text: string
    //children: ReactNode;
}
const Card:  React.FC<CardProps> =  ({text}) => {
    return (
        <div className='card'>
            <h2>{text}</h2>
        </div>
    );
};

export default Card;