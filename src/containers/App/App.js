import React, {PropTypes} from 'react';
import {Router} from 'react-router';

// Material UI deps
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cornflowerblue} from 'material-ui/styles/colors'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired
    }

    get content () {
        return (
            <Router
                routes={this.props.routes}
                history={this.props.history}/>
        )
    }

    render () {

        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: '#7cb5ec',
                textColor: cornflowerblue
            },
            appBar: {
                height: 50,
            },
            raisedButton: {
                backgroundColor: 'cornflowerblue'
            },
        })

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{height: '100%'}}>
                    {this.content}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
