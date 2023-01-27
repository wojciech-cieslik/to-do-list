import React, { useContext, useState } from 'react';

import { AppContext } from '../layouts/AppContext';

import '../styles/NewTask.css'

const NewTask = () => {

  const { handleAddNewTask } = useContext(AppContext);

  const [priority, setPriorrity] = useState(false);

  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const handlePrioritySet = () => {
    setPriorrity(prev => !prev);
  }

  const clearContent = () => {
    if (content.length > 2) {
      setContent('');
      setPriorrity(false);
    }
  }

  return (
    <div className="add-task-form">
      <h2>Dodaj nowe zadanie do wykonania:</h2>
      <input
        className='add-input'
        type="text" value={content}
        onChange={handleContentChange} placeholder='Wpisz nazwę zadania'
      />
      <label className='add-check'>
        Priorytet:
        <input type="checkbox" checked={priority} onChange={handlePrioritySet} />
      </label>
      <button
        className='add-button'
        onClick={() => { handleAddNewTask(content, priority); clearContent() }}
      >
        dodaj
      </button>
    </div>
  );
}

export default NewTask;