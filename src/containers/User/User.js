import React, {PropTypes as T} from 'react'
import {Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import styles from './styles.module.css'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor (props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
    this.logout = this.logout.bind(this)
  }

  logout () {
    this.props.auth.logout()
    this.context.router.push('/')
  }

  render () {
    const {profile} = this.state
    return (
      <div className={styles.root}>
        <p>Welcome {profile.name}!</p>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    )
  }
}

export default Home
