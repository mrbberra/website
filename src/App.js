import React, { Component } from 'react';
import './App.css';
import SectionList from './SectionList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SectionList>
          <div title='Moses Berra' isOpen={true} id='main'>
            <p>I like to code</p>
          </div>
          <div title='Avocados' isOpen={false} id='avocados'>
            <p>I like to eat them</p>
          </div>
          <div title='The Website' isOpen={false} id='this'>
            <p>I made it</p>
          </div>
          <div title='Contact' isOpen={false} id='contact'>
            <p>@me next time<br/>moses.r.berra@gmail.com</p>
          </div>
        </SectionList>
      </div>
    );
  }
}

export default App;
