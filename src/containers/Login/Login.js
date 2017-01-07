import React, {PropTypes as T} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import styles from './styles.module.css'

export class Login extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.authLogin = this.authLogin.bind(this)
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  authLogin () {
    let nextPathname = (this.props.location.state && this.props.location.state.nextPathname) || null
    this.props.auth.login(nextPathname)
  }

  render () {
    const { auth } = this.props
    return (
      <div className={styles.root}>
        <h2>Please login </h2>
        <p>You will be able to create an account if you don't have one</p>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle='primary' onClick={this.authLogin}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login
