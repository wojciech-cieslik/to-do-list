import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import Task from './Task';

const TasksList = () => {

  const { handleDeleteTasks, tasks } = useContext(AppContext);

  let listOfDoneTasks = tasks.filter(task => task.isDone === true);
  listOfDoneTasks = listOfDoneTasks.map(task => (
    <Task key={task.id} task={task} click={handleDeleteTasks} />
  ));

  let listOfTasks = tasks.filter(task => task.isDone === false);
  listOfTasks = listOfTasks.map(task => (
    <Task key={task.id} task={task} click={handleDeleteTasks} />
  ));

  return (
    <div>
      <h2>Zadania do wykonania</h2>
      {listOfTasks.length > 0
        ? <ul>{listOfTasks}</ul>
        : <p>-Brak zadań-</p>}
      <h2>Zadania wykonane</h2>
      {listOfDoneTasks.length > 0
        ? <ul>{listOfDoneTasks}</ul>
        : <p>-Brak zadań-</p>}
    </div>

  );
}

export default TasksList;