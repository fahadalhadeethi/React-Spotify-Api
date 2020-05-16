import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './login';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.css';
import Albums from './albumsApi';
function App() {
  return (
    <div >
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Route exact path="/" component={Login}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/Search" component={Search}></Route>
    <Route path="/album/:name/:id" component={Albums}></Route>
  </div>
  );
}

export default App;
