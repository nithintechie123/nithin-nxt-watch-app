import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import TrendingRoute from './components/TrendingRoute'
import NxtWatchContext from './components/NxtWatchContext/context'
import GamingRoute from './components/GamingRoute'
import NotFound from './components/NotFound'
import SavedVideosRoute from './components/SavedVideoRoute'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {themeStatus: true, activeMenu: activeMenuConstants.initial}

  changeThemeButton = () => {
    this.setState(prevState => ({
      themeStatus: !prevState.themeStatus,
    }))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {themeStatus, activeMenu} = this.state
    console.log(activeMenu)
    return (
      <NxtWatchContext.Provider
        value={{
          themeStatus,
          activeMenu,
          changeThemeButton: this.changeThemeButton,
          changeActiveMenu: this.changeActiveMenu,
        }}
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
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
