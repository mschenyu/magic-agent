import React, {Component} from 'react';
import {BrowserRouter,Routes, Route,Redirect} from "react-router-dom";//引入routerdom

import {Story1} from './pages/story1'
import {Story2} from './pages/story2'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story1/>}/>
          <Route path="/story2" element={<Story2/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router
