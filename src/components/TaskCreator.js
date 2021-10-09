import React, { useState, useRef } from 'react';

function TaskCreator({ createNewTask }) {

    const [newTask, setNewTask] = useState('');
    const taskInput = useRef();

    const updateNewTask = () => setNewTask(taskInput.current.value);

    const addTask = (e) => {
        e.preventDefault();
        if(taskInput.current.value !== '') {
            createNewTask(newTask);
            taskInput.current.value = '';
        }
    }

    return (
        <>
            <form onSubmit={ addTask }>
                <input className="form-control" 
                        type="text" 
                        placeholder="Ingresa una tarea"
                        ref={ taskInput }
                        onChange={ updateNewTask } />
                <input className="btn btn-primary" type="submit" />
            </form>
        </>
    );
}

export default TaskCreator;