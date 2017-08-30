import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ListPage from './pages/ListPage/ListPage';
import 'antd/dist/antd.css';
import './index.css';
import  NewFormPage from './pages/NewFormPage/NewFormPage';

ReactDOM.render(
  (
    <Router>
      <div>
        <Route exact path="/" component={ListPage}/>
        <Route path="/list" component={ListPage}/>
        <Route path="/NewFormPage" component={NewFormPage}/>
      </div>
    </Router>
  ),
  document.getElementById('root')
);

