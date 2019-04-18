import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Index () {
  return <h2>home</h2>
}
function About () {
  return <h2>about</h2>
}
function Users () {
  return <h2>Users</h2>
}

function createApp () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/users/">users</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  )
}

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
