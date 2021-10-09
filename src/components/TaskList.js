import React from 'react';

function TaskList({ tasksList, toggleTask, showDoneTasks }) {
    return(
        <>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>Description</td>
                        <td>Done</td>
                    </tr>
                </thead>
                <tbody>
                    { tasksList.length > 0 ? (
                        <>
                        { tasksList.filter(task => task.done === showDoneTasks).map((task, index) => (
                            <tr key={task.name}>
                                <td>{ task.name }</td>
                                <td>
                                    <input type="checkbox" 
                                    checked={task.done}
                                    onChange={ () => toggleTask(task.name) } />
                                </td>
                            </tr>
                        )) }
                        </>
                    ) : 'No hay tareas agregadas' }
                </tbody>
            </table>
        </>
    );
}

export default TaskList;