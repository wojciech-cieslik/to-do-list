import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import Task from './Task';

const TasksList = () => {

  const { handleDeleteTasks, tasks } = useContext(AppContext);
  const listOfTasks = tasks.map(task => (
    <Task key={task.id} task={task} click={handleDeleteTasks} />
  ));
  return (
    <ul>
      {listOfTasks}
    </ul>
  );
}

export default TasksList;