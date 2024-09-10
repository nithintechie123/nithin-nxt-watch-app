import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import TrendingRoute from './components/TrendingRoute'

import NxtWatchContext from './components/NxtWatchContext/context'

import ProtectedRoute from './components/ProtectedRoute'

import GamingRoute from './components/GamingRoute'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

class App extends Component {
  state = {themeStatus: true}

  changeThemeButton = () => {
    this.setState(prevState => ({
      themeStatus: !prevState.themeStatus,
    }))
  }

  render() {
    const {themeStatus} = this.state
    return (
      <NxtWatchContext.Provider
        value={{themeStatus, changeThemeButton: this.changeThemeButton}}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
