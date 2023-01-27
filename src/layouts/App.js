import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './AppContext';
import Navigation from './Navigation';

import '../styles/App.css';
import Page from './Page';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="app">
          <header>
            <h1 className='title'>To do list</h1>
          </header>
          <nav className='app-nav'>
            <Navigation />
          </nav>
          <main className='app-main'>
            <Page />
          </main>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
