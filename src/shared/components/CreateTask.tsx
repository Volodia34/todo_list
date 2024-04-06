import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    name: string;
    status: string;
}

const CreateTask = ({tasks,setTasks}:any) => {
    const [taskName, setTaskName] = useState<string>(''); // State for input field

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!taskName.trim()) return;
        const newTask: Task = {
            id: uuidv4(),
            name: taskName,
            status: "todo"
        };

        setTasks((prevTasks: Task[]) => [...prevTasks, newTask]); // Adding new task to tasks array
        setTaskName(''); // Clearing input field after submission
    };

    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="task-input"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button type="submit" className="task-button">
                    Create
                </button>
            </form>
    );
};

export default CreateTask;
