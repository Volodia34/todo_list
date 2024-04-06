import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import remove from './icons8-минус-50.png'
import {useDrag, useDrop} from "react-dnd";
import {Simulate} from "react-dom/test-utils";

export interface Task {
    id: string;
    name: string;
    status: 'todo' | 'inprogress' | 'closed';
}

interface ListTasksProps {
    tasks: Task[];
    setTasks: any
}


const ListTasks: FC<ListTasksProps> = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState<Task[]>([]);
    const [inProgress, setInProgress] = useState<Task[]>([]);
    const [closed, setClosed] = useState<Task[]>([]);

    useEffect(() => {
        const fTodos = tasks.filter((task:any) => task.status === 'todo');
        const fInProgress = tasks.filter((task: any) => task.status === 'inprogress');
        const fClosed = tasks.filter((task: any) => task.status === 'closed');

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks]);

    const statuses = ["todo","inprogress","closed"]
    return (
        <div  className='tasks'>
            {statuses.map((status,index,) => (
                <Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed}/>
                ))
            }
        </div>
    );
};

interface SectionProps {
    status: string
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    todos: Task[];
    inProgress: Task[]; // corrected prop name
    closed: Task[];
}

const Section: FC<SectionProps> = ({ status,tasks, setTasks,todos,inProgress,closed}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: any) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "Todo"
    let bg = '#4a5568'
    let tasksToMap = todos

    if(status === 'inprogress') {
        text = 'In Progress'
        bg= '#6b46c1'
        tasksToMap = inProgress
    }
    if(status === 'closed') {
        text = 'closed'
        bg= '#48bb78'
        tasksToMap = closed
    }

    const addItemToSection = (id: any) => {
        setTasks((prev:any) => {
            const mTask = prev.map((t:any) => {
                if(t.id ===id) {
                    return {...t, status: status}
                }
                return  t
            })
            return mTask
        })
    }

    return (
        <div ref={drop} className='task-headers' style={isOver ? {backgroundColor: 'silver'} : {}}>
            <TaskHeader text={text} bg={bg} count={tasksToMap.length}/>
            {tasksToMap.length > 0 && tasksToMap.map(task =>  <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>)}
        </div>
    );
};

interface HeaderProps {
    text: string;
    bg: string
    count: number;
}
const TaskHeader: FC<HeaderProps> = ({ text,bg, count }) => {
    return <div style={{backgroundColor: bg}} className='taskHeader'>
        {text}
        <div className="count">{count}</div>
    </div>;
};

interface TaskProps {
    task: any
    tasks: any
    setTasks: any

}


const Task: FC<TaskProps> = ({task,tasks,setTasks}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))



    const handleRemove = (id: any) => {
        console.log(id)

        const fTasks = tasks.filter((t: any) => t.id !== id)
        setTasks(fTasks)
    }
    return (
        <div ref={drag} className='task' style={isDragging ? {opacity: 0.2}: {opacity: 1}}>
            <p>{task.name}</p>
            <button style={{backgroundColor: 'white', border: 'none'}} onClick={() => handleRemove(task.id)}>
                <img src={remove} alt="" width='17'/>
            </button>
        </div>
    )
};

export default ListTasks;
