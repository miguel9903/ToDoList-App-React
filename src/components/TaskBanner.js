import React from 'react';

function TaskBanner({ userName, tasksList }) {

    const tasksToDo = tasksList.filter(task => !task.done);

    return (
        <>
            <h1 className="bg-primary text-white text-center p-4 h2">
                { userName } Task App ({tasksToDo.length} task to do)
            </h1>
        </>
    );
}

export default TaskBanner;