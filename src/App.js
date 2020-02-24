import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
          <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/73/00/4c/73004c31-75c9-a49b-2a40-e40b7894b3ec/source/512x512bb.jpg" alt="parrot"/>
      </header>
      <nav className='nav'>
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>User</div>
          <div>Settings</div>
      </nav>
      <div className='content'>Main content</div>
    </div>
  );
}




export default App;
