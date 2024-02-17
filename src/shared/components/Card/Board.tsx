import React from 'react';
import {DialogProps} from "../Dialog/Dialog.interface";
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;
interface BoardProps {

    children: React.ReactNode
    text: string
    id: any
    className: string,
}
const Board:  React.FC<BoardProps> = ({children,text,id,className}) => {

    const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const card_id: string = e.dataTransfer.getData('card_id');

        const card: HTMLElement | null = document.getElementById(card_id);

        if (card) {
            card.style.display = 'block';
            e.currentTarget.appendChild(card);
        }
    };
    const dropOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // Якщо вам потрібно виконати додаткові дії, ви можете додати їх тут
    };

    return (
        <div className={className} id={id} onDrop={drop} onDragOver={dropOver}>
            <h2>{text}</h2>
            {children}
        </div>
    );
};

export default Board;