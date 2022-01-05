import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar'
import TourList from './TourList.js';

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList/>
      </main>
    )
  }
}
