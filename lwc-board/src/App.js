import React from 'react';
// router
import { Route } from 'react-router-dom';
// redux

// components

// pages
import Home from './pages/Home';
import Write from './pages/Write';
import Detail from './pages/Detail';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/write" exact component={Write} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
    </React.Fragment>
  );
}

export default App;
