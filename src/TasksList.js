import React from 'react';

import Task from './Task';

const TasksList = (props) => {
  const { tasks, click } = props;
  const listOfTasks = tasks.map(task => (
    <Task key={task.id} task={task} click={click} />
  ));
  return (
    <ul>
      {listOfTasks}
    </ul>
  );
}

export default TasksList;