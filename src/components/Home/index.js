import {Component} from 'react'

import {HomeContainer} from '../../styledComponents'

import Header from '../Header'

import NxtWatchContext from '../NxtWatchContext/context'

class Home extends Component {
  state = {themeStatus: false}

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
        <HomeContainer>
          <Header />
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default Home
