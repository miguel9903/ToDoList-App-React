import React from 'react';

function VisibilityControl({ 
    showCompletedTasks, 
    setShowCompletedTasks  }) {

    return (
        <>
            <div className="text-center p-2">
                <div className="form-check">
                    <input type="checkbox"
                        value={ showCompletedTasks }
                        onChange={ () => setShowCompletedTasks(!showCompletedTasks) } />
                    <label htmlFor="form-check-label">
                        { showCompletedTasks ? 'Hide' : 'Show' } completed tasks
                    </label>
                </div>
            </div>
        </>
    );
}

export default VisibilityControl;