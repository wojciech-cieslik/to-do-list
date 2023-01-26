import React from 'react';

const Task = (props) => {
  const { task, click } = props;
  return (
    <div className="task-content">
      <p className='content'>{task.content}</p>
      <button className='task-delete-button'
        onClick={() => click(task.id)}>X</button>
    </div>
  );
}

export default Task;