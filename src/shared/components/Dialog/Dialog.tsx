import React, { useContext, useEffect, useState } from 'react';
import { Button, Dialog, DialogContent } from "@mui/material";
import { DialogProps } from "./Dialog.interface";
import { MyContext } from "../../../context";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import useHttp from "../../hooks/http";

const DialogModal: React.FC<DialogProps> = ({ open, close, index }) => {
    const [listdata, setListData] = useContext(MyContext);
    const { post, put } = useHttp();
    const [formValues, setFormValues] = useState({ taskName: '', description: '' });
    const [errors, setErrors] = useState({ taskName: '', description: '' });

    console.log(listdata)
    const validateInputs = () => {
        let valid = true;
        const newErrors = { taskName: '', description: '' };

        if (!formValues.taskName) {
            newErrors.taskName = 'Task Name is required';
            valid = false;
        }

        if (!formValues.description) {
            newErrors.description = 'Description is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleClickCreate = async () => {
        if (validateInputs()) {
            try {
                const response = await post({ ...formValues, id: uuidv4() }); // Додаємо id з фронтенду до даних для пост-запиту
                console.log(response.data);

                // @ts-ignore
                setListData([...listdata, { id: response.data.id, ...formValues }]); // Додаємо новий елемент до списку з id з відповіді сервера
                setFormValues({ taskName: '', description: '' });
                close();
            } catch (error) {
                console.error("Error during POST request:", error);
            }
        }
    };

    const editTodo = (id: number | null) => {
        if (validateInputs()) {
            const updatedTodos = listdata.map((todo: any) =>
                todo.id === id ? { ...todo, taskName: formValues.taskName, description: formValues.description } : todo
            );

            // @ts-ignore
            put(id, { ...formValues })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error during PUT request:", error);
                });

            setListData(updatedTodos);
            setFormValues({ taskName: '', description: '' });
            close();
        }
    };

    useEffect(() => {
        if (index !== null) {
            listdata.map((card: any) => card.id === index && setFormValues({ taskName: card.taskName, description: card.description }));
        } else {
            setFormValues({ taskName: '', description: '' });
        }
    }, [index]);

    const actionLabel = index !== null ? 'Update' : 'Create';

    const currentFunction = index !== null ? () => editTodo(index) : handleClickCreate;

    return (
        <Dialog
            open={open}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{ display: 'flex', flexDirection: 'column', marginBottom: '100px' }}
        >
            <DialogContent>
                <p className='form-title'>{actionLabel} Task</p>
                <hr />
                <div className="form-group">
                    <label className=''>Task Name</label>
                    <input type="text" className="form-input" value={formValues.taskName}
                           onChange={(e) => setFormValues({ ...formValues, taskName: e.target.value })}
                           name="taskName" />
                    {errors.taskName && <span style={{ color: 'red' }}>{errors.taskName}</span>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows={5} className="form-textarea" value={formValues.description}
                              onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                              name="description"></textarea>
                    {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
                </div>
                <hr />
                <div className='form-buttons'>
                    <Button color="primary" variant="contained" onClick={currentFunction}>{actionLabel}</Button>
                    <Button variant="contained" style={{ marginLeft: '20px' }} onClick={close}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogModal;
