import React, {ReactNode} from 'react';
import {Simulate} from "react-dom/test-utils";

interface CartProps {
    children: ReactNode
    id: any
    className: string
    draggable: any
}


const Cart: React.FC<CartProps> = ({children,id,className,draggable}) => {
    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement; // Використовуйте `as HTMLDivElement` для вказівки типу

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    };
    const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <div
        id={id}
        className={className}
        draggable={draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}>
            {children}
        </div>
    );
};

export default Cart;