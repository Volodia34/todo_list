import React, {useContext, useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import Section from "./shared/components/Section";
import Card from "./shared/components/card/Card";
import {MyContext} from "./context";
import DialogModal from "./shared/components/Dialog/Dialog";
import useHttp from "./shared/hooks/http";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";


function App() {
    const [open, setOpen] = useState(false)
    const [listdata,setListData] = useContext(MyContext)
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const http =  useHttp();

    useEffect(() => {
        http.get()
            .then((response) => {
                console.log(response.data);
                setListData(response.data);
            })
            .catch((error) => {
                console.error("Error during GET request:", error);
            });
    }, []);


    const handleDialogToggle = (): void => {
        setOpen((prev) => !prev);
        setEditIndex(null);
    };

    const handleClose = () => {
        handleDialogToggle();
    };

    const handleDeleteCard = (id: number) => {
        const updatedCards = listdata.filter((card: any) => card.id !== id);
        http.del(id)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error during POST request:", error);
            });
        setListData(updatedCards);
    };

    const handleEditCard = (id: number) => {
        setOpen(true)
        setEditIndex(id)

    };

    console.log(editIndex)
    console.log(listdata)
    return (
        <div className='app'>
            <Header/>
            <Section click={handleDialogToggle}/>

            <div className="cards">
                {listdata.map((card: any,index: number) => (
                    <Link to={`/card/${card.id}`} key={card.id} className="link-style">
                        <Card  taskName={card.taskName} descripton={card.description} index={index} key={card.id} delite={() => handleDeleteCard(card.id)} edit={() => handleEditCard(card.id)}/>
                    </Link>
                ) )}
            </div>

            <DialogModal open={open} close={handleClose} index={editIndex}/>
        </div>
    );
}

export default App;
