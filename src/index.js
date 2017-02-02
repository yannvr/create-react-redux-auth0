import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import App from './containers/App/App'
import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const store = configureStore()
const routes = makeRoutes()

const mountNode = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
      <App history={browserHistory} routes={routes} />
  </Provider>
  ,
  mountNode)
