import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [userName, setUserName] = useState('Miguel');
  const [tasksList, setTasksList] = useState([
    { name: 'Task 01', done: false },
    { name: 'Task 02', done: false },
    { name: 'Task 03', done: false },
    { name: 'Task 04', done: true },
    { name: 'Task 05', done: false }
  ]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if(data != null) {
      setTasksList(JSON.parse(data));
    } else {
      setUserName('Miguel');
      setTasksList([
        { name: 'Task 01', done: false },
        { name: 'Task 02', done: false },
        { name: 'Task 03', done: false },
        { name: 'Task 04', done: true },
        { name: 'Task 05', done: false }
      ]);
      setShowCompletedTasks(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }, [tasksList])

  const toggleTask = (taskName) => {
   setTasksList(tasksList.map(task => (task.name === taskName ? { ...task, done: !task.done } :  task )));
  }

  const createNewTask = (taskName) => {
    const existTask = tasksList.find(task => task.name === taskName);
    if(!existTask) {
      const newTask = {
        name: taskName,
        done: false
      }
      setTasksList([...tasksList, newTask]);
    }
  }

  return (
    <>
      <TaskBanner userName={userName} tasksList={tasksList} />
      <section className="container">
        <TaskCreator createNewTask={createNewTask} />
        <TaskList tasksList={tasksList} toggleTask={toggleTask} showDoneTasks={false} />
        <VisibilityControl showCompletedTasks={showCompletedTasks} setShowCompletedTasks={setShowCompletedTasks} />
        { showCompletedTasks && (
          <TaskList tasksList={tasksList} toggleTask={toggleTask} showDoneTasks={true} />
        ) }
      </section>
    </>
  );
}

export default App;
