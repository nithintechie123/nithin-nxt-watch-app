import {Component} from 'react'

import NxtWatchContext from '../NxtWatchContext/context'
import Header from '../Header'
import {SideBarSavedVideosContainer} from './styledComponents'
import SideBar from '../SideBarContainer'

class SavedVideosRoute extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          console.log(themeStatus)
          return (
            <>
              <Header />
              <SideBarSavedVideosContainer>
                <SideBar />
              </SideBarSavedVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosRoute
