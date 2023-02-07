import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';



export default class App extends Component {
  render(): React.ReactNode {
    return <div>
      <Main></Main>
      <Footer />
    </div>
  }
};
