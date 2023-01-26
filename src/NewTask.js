import React, { useState } from 'react';

const NewTask = (props) => {

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
        onClick={() => { props.click(content); clearContent() }}
      >
        dodaj
      </button>
    </div>
  );
}

export default NewTask;