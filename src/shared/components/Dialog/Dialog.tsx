import React, {useContext, useEffect, useState} from 'react';
import {Button, Dialog, DialogContent, TextareaAutosize} from "@mui/material";
import {DialogProps} from "./Dialog.interface";
import {MyContext} from "../../../context";
import {Input, Label} from "reactstrap";

const DialogModal: React.FC<DialogProps> = ({open,close,index}) => {
    const [list, setList] = useContext(MyContext)
    const [formValues, setFormValues] = useState({taskName: '', description: ''});
    const handleClickCreate = () => {
        if (formValues.taskName && formValues.description) {
            setList([...list, {id: list.length, ...formValues}])
        }
        setFormValues({taskName: '', description: ''})
        close()
    }

    const editTodo = (id: number | null) => {
        const updatedTodos = list.map((todo: any) =>
            todo.id === id ? {...todo, taskName: formValues.taskName, description: formValues.description} : todo
        );
        setList(updatedTodos);
        setFormValues({taskName: '', description: ''})
        close()
    };

    let currentFunction
    let edit

    if(index !== null) {
        currentFunction = () =>  editTodo(index)
        //console.log({taskName: list[index].taskName, description:list[index].description})
        edit = true
    }else {
        currentFunction = handleClickCreate
        edit = false
    }


    useEffect(() => {
        if(index !== null) {
            setFormValues({taskName: list[index].taskName, description:list[index].description})
        }else {
            setFormValues({taskName: '', description: ''})
        }
    }, [index]);


    return (
        <Dialog
            open={open}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{display: 'flex',flexDirection: 'column', marginBottom: '100px'}}
        >
            <DialogContent>
                <p className='form-title'>{edit ? 'Update' : 'Create'} Task</p>
                <hr/>
                <div className="form-group">
                    <label className=''>Task Name</label>
                    <input type="text" className="form-input" value={formValues.taskName}
                           onChange={(e) => setFormValues({...formValues, taskName: e.target.value})}
                           name="taskName"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows={5} className="form-textarea" value={formValues.description}
                              onChange={(e) => setFormValues({...formValues, description: e.target.value})}
                              name="description"></textarea>
                </div>
                <hr/>
                <div className='form-buttons'>
                    <Button color="primary" variant="contained" onClick={currentFunction}>{edit ? 'Update' : 'Create'}</Button>
                    <Button variant="contained" style={{backgroundColor: 'silver', marginLeft: '20px'}} onClick={close}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogModal;