import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/home/Home';
import CreatePost from './views/create-post/CreatePost';
import EditPost from './views/edit-post/EditPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createPost"> 
          <CreatePost />
        </Route>
        <Route path="/editPost/:postId/:editMode">
          <EditPost />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
