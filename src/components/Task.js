import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import '../styles/Task.css'

const Task = (props) => {

  const { handleSetIsDone } = useContext(AppContext);
  const { task, click } = props;
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
          onClick={() => click(task.id)}
        >
          X
        </button>
      </div>

    </div>
  );
}

export default Task;