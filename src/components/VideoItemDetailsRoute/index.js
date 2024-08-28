import {Component} from 'react'

import {differenceInYears} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import NxtWatchContext from '../NxtWatchContext/context'

import Header from '../Header'
import SideBar from '../SideBarContainer'

import {
  SideBarVideoItemDetailsContainer,
  VideoItemDetailsContainer,
  VideoTitle,
  ViewsTimeLikesContainer,
  ViewTimeContainer,
  ViewCount,
  ViewsText,
  PublishedTimeText,
  LikesDislikesSaveContainer,
  ItemContainer,
  IconText,
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
    const {videoUrl, title, viewCount, publishedAt} = videoDetailsData

    const formattedDate = publishedDate => {
      const yearsAgo = differenceInYears(new Date(), new Date(publishedDate))

      if (yearsAgo === 1) {
        return `1 year ago`
      }
      return `${yearsAgo} years ago`
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value

          return (
            <>
              <Header />
              <SideBarVideoItemDetailsContainer>
                <SideBar themeStatus={themeStatus} />
                <VideoItemDetailsContainer themeStatus={themeStatus}>
                  <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="60%"
                    controls="true"
                  />
                  <VideoTitle themeStatus={themeStatus}>{title}</VideoTitle>
                  <ViewsTimeLikesContainer>
                    <ViewTimeContainer>
                      <ViewCount>
                        {viewCount}
                        <ViewsText>views</ViewsText>
                      </ViewCount>
                      <BsDot />
                      <PublishedTimeText>
                        {formattedDate(publishedAt)}
                      </PublishedTimeText>
                    </ViewTimeContainer>
                    <LikesDislikesSaveContainer>
                      <ItemContainer>
                        <BiLike />
                        <IconText>Like</IconText>
                      </ItemContainer>
                      <ItemContainer>
                        <BiDislike />
                        <IconText>Dislike</IconText>
                      </ItemContainer>
                      <ItemContainer>
                        <MdPlaylistAdd />
                        <IconText>Save</IconText>
                      </ItemContainer>
                    </LikesDislikesSaveContainer>
                  </ViewsTimeLikesContainer>
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
