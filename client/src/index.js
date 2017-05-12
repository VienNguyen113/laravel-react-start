// @flow

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { browserHistory, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'

import rootReducer from './reducers'
import App from './components'
import About from './components/about.js'
import Topics from './components/topics.js'

import './custom.css'

// Add the reducer to your store on the `routing` key
const store = createStore(
  rootReducer
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


render((
  <Provider store={store}>
    <Router 
      history={history} 
      render={applyMiddleware(useRelativeLinks())}
    >
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="topics" component={Topics}/>
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'))
