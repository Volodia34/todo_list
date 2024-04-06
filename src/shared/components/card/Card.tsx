import React, {FC} from 'react';
import {CardProps} from "./Card.interface";


const Card: FC<CardProps> = ({ taskName,descripton,index,delite,edit}) => {

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleEditClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault()
        edit();
    };

    const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault()
        delite();
    };

    return (
        <div className='card'>
            <div className="card-top" style={{backgroundColor: colors[index % 5].primaryColor}}></div>
            <div className="card-header" style={{backgroundColor: colors[index % 5].secondaryColor}}>
                <p className='card-title'>{taskName}</p>
            </div>
            <p className='card-description'>{descripton}</p>

            <div className='card-butons'>
                <i className="far fa-edit mr-3" style={{"color": colors[index % 5].primaryColor, "cursor": "pointer", marginRight: '15px'}} onClick={handleEditClick}></i>
                <i className="fas fa-trash-alt" style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}} onClick={handleDeleteClick}></i>
            </div>


        </div>


    );
};

export default Card;