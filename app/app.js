import React, {Component} from 'react'
import {
    Router,
    Route,
    Link,
    IndexRoute,
    hashHistory,
    browserHistory
} from 'react-router'

import createHistory from 'history/createBrowserHistory'

class App extends Component {
    render() {
        return (
            <Router history={createHistory}>
                <Route path='/' component={Home}/>
                <Route path='/address' component={Address}/>
                <Route path='*' component={NotFound}/>
            </Router>
        )
    }
}
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>Not found</h1>

export default App