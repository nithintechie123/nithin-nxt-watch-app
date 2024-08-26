import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import NxtWatchContext from './components/NxtWatchContext/context'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/videos/:id" component={VideoItemDetailsRoute} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
