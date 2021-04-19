import React from 'react'
import { Link } from 'react-router-dom'
import Router from './router'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/page1">Page1</Link>
      </div>
      <Router />
    </div>
  )
}

export default App;
