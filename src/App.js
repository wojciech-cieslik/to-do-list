import React, { useState } from 'react';

import TasksList from './TasksList';
import NewTask from './NewTask';

import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, content: 'Zrobić śniadanie' },
    { id: 2, content: 'Zrobić obiad' },
    { id: 3, content: 'Zrobić kolację' }
  ]);

  const [idCounter, setIdCounter] = useState(tasks.length + 1);

  const handleDeleteTasks = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const handleAddNewTask = (newContent) => {
    if (newContent.length > 2) {
      setIdCounter(count => count + 1);
      const newTask = {
        id: idCounter,
        content: newContent,
      };
      setTasks(tasks.concat(newTask));
    } else {
      alert("Nazwa musi zawierać przynajmniej 3 zanki!")
    }
  }

  return (
    <div className="app">
      <h1 className='title'>To do list</h1>
      <NewTask click={handleAddNewTask} />
      <TasksList tasks={tasks}
        click={handleDeleteTasks} />
    </div>
  );
}

export default App;
