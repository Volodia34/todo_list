import React, {useState} from 'react';
import ListTasks, {Task} from "./ListTasks";
import CreateTask from "./CreateTask";
import Header from "../../components/Header";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const CardPage = () => {
    const [tasks,setTasks] = useState([])
    console.log(tasks)
    return (
        <DndProvider backend={HTML5Backend}>
            <Header/>
            <h1>DRAG AND DROP</h1>
            <CreateTask tasks={tasks} setTasks={setTasks}/>
            <ListTasks tasks={tasks} setTasks={setTasks}/>
        </DndProvider>
    );
};

export default CardPage;