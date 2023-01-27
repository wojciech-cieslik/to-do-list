import React, { useContext } from 'react';

import { AppContext } from '../layouts/AppContext';
import Task from '../components/Task';

import '../styles/TasksLists.css';

const ImportantTaksList = () => {

  const { tasks } = useContext(AppContext);

  let listOfTasks = tasks.filter(task => task.isDone === false && task.priority === true).reverse();

  listOfTasks = listOfTasks.map(task => (
    <Task key={task.id} task={task} />
  ));

  return (
    <div className='list'>
      <h2>Zadania Ważne</h2>
      {listOfTasks.length > 0
        ? <ul>{listOfTasks}</ul>
        : <p>-Brak zadań-</p>}
    </div>
  );
}

export default ImportantTaksList;