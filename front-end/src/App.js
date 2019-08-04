import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage  from './Containers/HomePage/HomePage.jsx';
import AboutPage from './Containers/AboutPage/AboutPage.jsx';
import LoginPage from './Containers/LoginPage/LoginPage.jsx';
import Layout from './Hoc/Layout/Layout';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Layout>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/login' component={LoginPage} />
    </Layout>

  );
}


export default App  ;
