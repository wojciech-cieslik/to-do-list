import React, { useContext } from 'react';

import { AppContext } from '../layouts/AppContext';
import Task from '../components/Task';

import '../styles/TasksLists.css';

const TasksList = () => {

  const { tasks } = useContext(AppContext);

  let listOfTasks = tasks.filter(task => task.isDone === false).reverse();

  listOfTasks = listOfTasks.map(task => (
    <Task key={task.id} task={task} />
  ));

  return (
    <div className='list'>
      <h2>Zadania do wykonania ({listOfTasks.length})</h2>
      {listOfTasks.length > 0
        ? <ul>{listOfTasks}</ul>
        : <p>-Brak zadań-</p>}
    </div>
  );
}

export default TasksList;