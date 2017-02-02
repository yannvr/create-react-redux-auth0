import React, {PropTypes as T} from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render () {
    let children = null
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth // sends auth instance to children
      })
    }

    return (
      <Jumbotron>
        <Link activeClassName='route--active' to='/'>Home </Link>
        <Link activeClassName='route--active' to='/about'> About</Link>
        {/* <Link activeClassName='route--active' to='/user'> User</Link> */}
        <Link to='/user' onClick={e => {
          if (!this.props.route.auth.loggedIn()) {
            e.preventDefault()
            this.props.route.auth.login('/user')
          }
        }}> User</Link>
        {children}
      </Jumbotron>
    )
  }
}

export default Container
