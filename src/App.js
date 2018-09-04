import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
