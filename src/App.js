import React from 'react';
import { Component } from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import NavBar from './NavBar'


/* 
using :name, match, match.params to pass content to url 

using ` and $ instead of ' in to attribute in link to get name property to be passed in url 
*/
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar/>
          <div id='page-body'>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={AboutPage} />
            <Route path='/article-list' component={ArticleList} />
            <Route path='/article/:name' component={Article} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;