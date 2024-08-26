import {Component} from 'react'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import NxtWatchContext from '../NxtWatchContext/context'

import Header from '../Header'
import SideBar from '../SideBarContainer'

import {
  SideBarVideoItemDetailsContainer,
  VideoItemDetailsContainer,
} from './styledComponents'

class VideoItemDetailsRoute extends Component {
  state = {videoDetailsData: []}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const videoDetails = data.video_details
      const channelData = data.video_details.channel

      const formattedData = {
        id: videoDetails.id,
        name: channelData.name,
        profileImageUrl: channelData.profile_image_url,
        subscriberCount: channelData.subscriber_count,
        videoUrl: videoDetails.video_url,
        publishedAt: videoDetails.published_at,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }
      this.setState({videoDetailsData: formattedData})
    }
  }

  render() {
    const {videoDetailsData} = this.state
    const {videoUrl} = videoDetailsData

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value

          return (
            <>
              <Header />
              <SideBarVideoItemDetailsContainer>
                <SideBar themeStatus={themeStatus} />
                <VideoItemDetailsContainer>
                  <ReactPlayer url={videoUrl} controls="true" />
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
