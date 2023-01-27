import React from 'react';

import TasksList from './TasksList';
import NewTask from './NewTask';
import AppProvider from './AppContext';

import '../styles/App.css';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <h1 className='title'>To do list</h1>
        <NewTask />
        <TasksList />
      </div>
    </AppProvider>
  );
}

export default App;
