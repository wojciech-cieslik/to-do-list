import React, { useContext } from 'react';

import { AppContext } from '../layouts/AppContext';
import Task from '../components/Task';

import '../styles/TasksLists.css';

const DoneTasksList = () => {

  const { tasks } = useContext(AppContext);

  let listOfDoneTasks = tasks.filter(task => task.isDone === true);

  listOfDoneTasks = listOfDoneTasks.map(task => (
    <Task key={task.id} task={task} />
  ));

  return (
    <div className='list'>
      <h2>Zadania wykonane ({listOfDoneTasks.length})</h2>
      {listOfDoneTasks.length > 0
        ? <ul>{listOfDoneTasks}</ul>
        : <p>-Brak zadań-</p>}
    </div>
  );
}

export default DoneTasksList;