import React, { useContext } from 'react';

import { AppContext } from '../layouts/AppContext';
import Task from '../components/Task';

import '../styles/TasksLists.css';

const ImportantTaksList = () => {

  const { tasks } = useContext(AppContext);

  let listOfImportantTasks = tasks.filter(task => task.isDone === false && task.priority === true).reverse();

  listOfImportantTasks = listOfImportantTasks.map(task => (
    <Task key={task.id} task={task} />
  ));

  return (
    <div className='list'>
      <h2>Zadania Ważne ({listOfImportantTasks.length})</h2>
      {listOfImportantTasks.length > 0
        ? <ul>{listOfImportantTasks}</ul>
        : <p>-Brak zadań-</p>}
    </div>
  );
}

export default ImportantTaksList;