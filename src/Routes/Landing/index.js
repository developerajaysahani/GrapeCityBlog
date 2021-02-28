import React, { Component } from 'react';
//import CompleteMap from '../../components/CompleteMap/CompleteMap.js';
//import ApiManager from '../../ApiManager/ApiManager.js';
import Header from '../../components/Layout//Header/Header';
import Footer from '../../components/Layout//Footer/footer';
//import Contact from '../../components/Contact/Contact.js';
import Home from '../../components/Home/Home';
class Landing extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/> 
        <Footer/>   
      </div>
    );
  }
}

export default Landing;