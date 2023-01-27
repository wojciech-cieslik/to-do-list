import React, { useContext, useState } from 'react';

import { AppContext } from './AppContext';

import '../styles/NewTask.css'

const NewTask = () => {

  const { handleAddNewTask } = useContext(AppContext);

  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const clearContent = () => {
    if (content.length > 2) {
      setContent('');
    }
  }

  return (
    <div className="add-task-form">
      <input
        className='add-input'
        type="text" value={content}
        onChange={handleContentChange} placeholder='Wpisz nazwę zadania'
      />
      <button
        className='add-button'
        onClick={() => { handleAddNewTask(); clearContent() }}
      >
        dodaj
      </button>
    </div>
  );
}

export default NewTask;