import React, {useContext, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import Section from "./shared/components/Section";
import Card from "./shared/components/card/Card";
import {MyContext} from "./context";
import DialogModal from "./shared/components/Dialog/Dialog";


function App() {
    const [open, setOpen] = useState(false)
    const [list,setList] = useContext(MyContext)
    const [editIndex, setEditIndex] = useState<number | null>(null);



    const handleDialogToggle = (): void => {
        setOpen((prev) => !prev);
        setEditIndex(null);
    };

    const handleClose = () => {
        handleDialogToggle();
    };

    const handleDeleteCard = (id: number) => {
        const updatedCards = list.filter((card: any) => card.id !== id);
        setList(updatedCards);
    };

    const handleEditCard = (id: number) => {
        setOpen(true)
        setEditIndex(id)

    };
    
    return (
        <div className='app'>
            <Header/>
            <Section click={handleDialogToggle}/>

            <div className="cards">
                {list.map((card: any) =>  <Card  taskName={card.taskName} descripton={card.description} index={card.id} key={card.id} delite={() => handleDeleteCard(card.id)} edit={() => handleEditCard(card.id)}/>)}
            </div>

            <DialogModal open={open} close={handleClose} index={editIndex}/>

        </div>
    );
}

export default App;
