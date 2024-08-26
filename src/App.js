import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import './App.css'

// Replace your code here

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/videos/:id" component={VideoItemDetailsRoute} />
      </Switch>
    )
  }
}
export default App
