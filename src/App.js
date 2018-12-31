import React, { Component } from 'react';
import './App.scss';
import Sidebar from './modules/sidebar/sidebar';
import Header from './modules/header/header';
import Realtors from './modules/realtors/realtors';
import Features from './modules/features/features';
import Story from './modules/story/story';
import Homes from './modules/homes/homes';
import Gallery from './modules/gallery/gallery';
import Footer from './modules/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar/>
        <Header/>
        <Realtors/>
        <Features/>
        <Story/>
        <Homes/>
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

export default App;
