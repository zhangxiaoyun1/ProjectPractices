import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Content from './container/Content'
import Login from './container/Login'
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/content/' component={Content} />
                    {/* <Redirect from='/content/' to='/content/analysis'/> */}
                </Switch>

            </Router>
        )
    }
}
