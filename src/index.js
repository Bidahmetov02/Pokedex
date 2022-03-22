import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import Search from './components/Search';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/search' element={<Search/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
