import React, {ReactNode} from 'react';


interface CardProps {
    children: ReactNode;
}
const Card:  React.FC<CardProps> =  ({children}) => {
    return (
        <div className='cards'>
            {children}
        </div>
    );
};

export default Card;