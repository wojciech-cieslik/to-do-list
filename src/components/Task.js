import React, { useContext } from 'react';

import { AppContext } from '../layouts/AppContext';

import '../styles/Task.css'

const Task = ({ task }) => {

  const { handleSetIsDone, handleDeleteTasks } = useContext(AppContext);

  return (
    <div className="task-content">
      <p className='content'>{task.content}</p>
      <div>
        {task.isDone || <button
          className='task-is-done-button'
          onClick={() => handleSetIsDone(task.id)}
        >
          Zrobione
        </button>}
        <button
          className='task-delete-button'
          onClick={() => handleDeleteTasks(task.id)}
        >
          X
        </button>
      </div>

    </div>
  );
}

export default Task;