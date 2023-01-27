import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NewTask from '../pages/NewTask';
import TasksList from '../pages/TasksList';
import DoneTasksList from '../pages/DoneTasksList';
import ImportantTaksList from '../pages/ImportantTasksList';

const Page = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NewTask />} />
        <Route path='/tasks' element={<TasksList />} />
        <Route path='/done' element={<DoneTasksList />} />
        <Route path='/priority' element={<ImportantTaksList />} />
        <Route path='*' element={<h2>Nie ma takie strony 404</h2>} />
      </Routes>
    </>
  );
}

export default Page;