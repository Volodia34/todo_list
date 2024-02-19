import React, {useState} from 'react';
import './App.scss';
import TodoButton from "./shared/components/buttons/Button";
import Header from "./components/Header";
import Section from "./shared/components/Section";
import Card from "./shared/components/card/Card";


function App() {
    const [open, setOpen] = useState(false)
    const [list, setList] = useState([{id: 0, title: 'Hello', text: 'text'}])
    const [formValues, setFormValues] = useState({title: '', text: ''});
    const [editIndex, setEditIndex] = useState<number | null>(null);



    const handleDialogToggle = (): void => {
        setOpen((prev) => !prev);
        setEditIndex(null);
    };
    const handleClickOpen = () => {
        handleDialogToggle();
    };
    const handleClose = () => {
        handleDialogToggle();
    };


    const handleClickCreate = () => {
        if (formValues.title && formValues.text) {
            setList([...list, {id: list.length, ...formValues}])
        }
        setFormValues({title: '', text: ''})
        setOpen(false);

    }

    const handleDeleteCard = (id: number) => {
        const updatedCards = list.filter(card => card.id !== id);
        setList(updatedCards);
    };

    const handleEditCard = (id: number) => {
        setOpen(true)
        setEditIndex(id)

    };

    const editTodo = (id: number) => {
        const updatedTodos = list.map(todo =>
            todo.id === id ? {...todo, title: formValues.title, text: formValues.text} : todo
        );
        setList(updatedTodos);
        setOpen(false)
        setFormValues({title: '', text: ''});
        setFormValues({title: '', text: ''});
        setEditIndex(null);
    };


    return (
        <div className='app'>
            <Header/>
            <Section/>


            <div className="cards">
                <Card  text='tesst' index={0} delite={() => {}} edit={() => {}}/>
                <Card  text='tesst'  index={1} delite={() => {}} edit={() => {}}/>
                <Card  text='tesst' index={2} delite={() => {}} edit={() => {}}/>
                <Card  text='tesst' index={3} delite={() => {}} edit={() => {}}/>
                <Card  text='tesst' index={4} delite={() => {}} edit={() => {}}/>
                <Card  text='tesst' index={5} delite={() => {}} edit={() => {}}/>
            </div>

            {/*<div className="flex">*/}
            {/*    <Board id='board-1' className='board' text='To do'>*/}
            {/*            {list.map((value) =>*/}
            {/*                <Cart id={`card-${value.id}`} className='card' draggable='true'>*/}
            {/*                    <List title={value.title} text={value.text} key={value.id}*/}
            {/*                          delite={() => handleDeleteCard(value.id)}*/}
            {/*                          edit={() => handleEditCard(value.id)}/>*/}
            {/*                </Cart>)*/}
            {/*            }*/}

            {/*    </Board>*/}
            {/*    <Board id='board-2' className='board' text='Doing'>*/}
            {/*        <p></p>*/}
            {/*    </Board>*/}
            {/*    <Board id='board-3' className='board' text='Done'>*/}
            {/*        <p></p>*/}
            {/*    </Board>*/}
            {/*    <Board id='board-4' className='board' text='Trash'>*/}
            {/*        <p></p>*/}
            {/*    </Board>*/}

            {/*</div>*/}


            {/*<DialogModal open={open} close={handleClose}>*/}
            {/*    <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth*/}
            {/*               style={{marginBottom: '12px'}}*/}
            {/*               value={formValues.title} onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}/>*/}
            {/*    <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth value={formValues.text}*/}
            {/*               style={{marginBottom: '12px'}}*/}
            {/*               onChange={(e) => setFormValues({ ...formValues, text: e.target.value })}/>*/}
            {/*    <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth*/}
            {/*               style={{marginBottom: '12px'}}/>*/}
            {/*    {editIndex ? <TodoButton click={() => editTodo(editIndex)}>Edit</TodoButton> :*/}
            {/*        <TodoButton click={handleClickCreate}>Create</TodoButton>}*/}
            {/*</DialogModal>*/}
            {/*<TodoButton click={handleClickOpen}>Create</TodoButton>*/}

        </div>
    );
}

export default App;
