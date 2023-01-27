import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [tasks, setTasks] = useState([
    { id: 1, isDone: false, content: 'Zrobić śniadanie' },
    { id: 2, isDone: false, content: 'Zrobić obiad' },
    { id: 3, isDone: false, content: 'Zrobić kolację' }
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
        isDone: false,
        id: idCounter,
        content: newContent,
      };
      setTasks(tasks.concat(newTask));
    } else {
      alert("Nazwa musi zawierać przynajmniej 3 zanki!")
    }
  }

  const handleSetIsDone = (id) => {
    const temporaryTasks = tasks.map(task => {
      if (task.id === id) {
        task.isDone = true;
      }
      return task;
    })
    setTasks(temporaryTasks);
  }

  return (
    <AppContext.Provider value={{ tasks, handleAddNewTask, handleDeleteTasks, handleSetIsDone }}>
      {children}
    </AppContext.Provider>);
}

export default AppProvider;