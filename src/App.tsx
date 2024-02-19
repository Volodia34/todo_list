import React, {useState} from 'react';
import './App.scss';
import {TextField} from "@mui/material";
import TodoButton from "./shared/components/buttons/Button";
import List from "./shared/components/list/List";
import DialogModal from "./shared/components/Dialog/Dialog";
import Header from "./components/Header";

function App() {
    const [open, setOpen] = useState(false)
    const [list, setlist] = useState([{title: 'Hello', text: 'text'}])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [editIndex, setEditIndex] = useState<number | null>(null);
    console.log(editIndex)
    const handleClickOpen = (): void => {
        setOpen((prev) => !prev);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickPush = () => {
        if (title && text) {
            setlist([...list, {title, text}])
        }
        setTitle('')
        setText('')
        setOpen(false);

    }

    const handleDeleteCard = (id: number) => {
        const updatedCards = list.filter((card, index) => index !== id);
        setlist(updatedCards);
    };

    const handleEditCard = (id: number) => {

        setOpen(true)
        setEditIndex(id)



    };

    const editTodo = (index: number) => {
        const updatedTodos = [...list];
        updatedTodos[index] = {title: title,text: text};
        setlist(updatedTodos);
        setOpen(false)
        setTitle('')
        setText('')
        setEditIndex(null);
    };


    return (
        <div className='app'>
            <Header/>
            <h1>Todo list</h1>

            {list.map((value, index) => <List title={value.title} text={value.text} key={index}
                                              delite={() => handleDeleteCard(index)}
                                              edit={() => handleEditCard(index)}/>)}
            <DialogModal open={open} close={handleClose}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth style={{marginBottom: '12px'}}
                           value={title} onChange={(e) => setTitle(e.target.value)}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth value={text} style={{marginBottom: '12px'}}
                           onChange={(e) => setText(e.target.value)}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth style={{marginBottom: '12px'}}/>
                {editIndex ? <TodoButton click={() => editTodo(editIndex)}>Edit</TodoButton> :
                    <TodoButton click={handleClickPush}>Create</TodoButton>}
            </DialogModal>
            <TodoButton click={handleClickOpen}>Create</TodoButton>
        </div>
    );
}

export default App;
