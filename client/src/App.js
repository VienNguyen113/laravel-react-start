/*// @flow

import React, { Component } from 'react'
import logo from './styles/images/logos/logo.svg'
import './custom.css'
import InApp from './InApp'

class App extends Component {
  render() {
    console.log(logo)
    document.title = "DKNY" // Change Title or use Helmet extension
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="text-success">DKNY - Secret-{ process.env.REACT_APP_SECRET_CODE } with mode-{ process.env.NODE_ENV }</h2>
          <InApp />
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
