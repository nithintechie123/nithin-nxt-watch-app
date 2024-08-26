import {Component} from 'react'

import NxtWatchContext from '../NxtWatchContext/context'

import Header from '../Header'
import SideBar from '../SideBarContainer'

import {
  SideBarVideoItemDetailsContainer,
  VideoItemDetailsContainer,
  VideoTitle,
} from './styledComponents'

class VideoItemDetailsRoute extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <>
              <Header />
              <SideBarVideoItemDetailsContainer>
                <SideBar />
                <VideoItemDetailsContainer>
                  <VideoTitle>Nithin</VideoTitle>
                </VideoItemDetailsContainer>
              </SideBarVideoItemDetailsContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
