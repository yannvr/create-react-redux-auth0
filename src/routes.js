import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './utils/AuthService'
import About from './containers/About'
import User from './containers/User/User'
import Container from './containers/Container/Container'
import Login from './containers/Login/Login'

const auth = new AuthService('AUTH0_CLIENT_ID', 'neocode.auth0.com')

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}

export const makeRoutes = () => {
  return (

    <Route path='/' component={Container} auth={auth}>
      <IndexRedirect to='/login' />
      <Route path='/user' component={User} onEnter={requireAuth} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      {/* <Route path='*' component={NotFound}/> */}
    </Route>
  )
}

export default makeRoutes
