import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

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
    <AppContext.Provider value={{ tasks, handleAddNewTask, handleDeleteTasks }}>
      {children}
    </AppContext.Provider>);
}

export default AppProvider;