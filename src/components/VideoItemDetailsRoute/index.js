import {Component} from 'react'
import Loader from 'react-loader-spinner'

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
  ViewLikeContainer,
  ViewText,
  TimeText,
  LikesDislikesSaveContainer,
  ItemContainer,
  HorizontalLine,
  VideoDescriptionContainer,
  DescProfileImage,
  ChannelSubDescContainer,
  ChannelSubscriberContainer,
  ChannelName,
  SubscribersCount,
  MobileVideoDescription,
  DesktopVideoDescription,
  FailureContainer,
  FailureImageElement,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoaderContainer,
  LikeText,
  DisLikeText,
  SaveText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetailsData: [],
    apiStatus: apiStatusConstants.initial,
    likeStatus: false,
    dislikeStatus: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      likeStatus: !prevState.likeStatus,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      dislikeStatus: !prevState.dislikeStatus,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

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

      const videoDetails = data.video_details
      const channelData = data.video_details.channel
      console.log(channelData)

      const formattedData = {
        id: videoDetails.id,
        name: channelData.name,
        profileImageUrl: channelData.profile_image_url,
        subscriberCount: channelData.subscriber_count,
        videoUrl: videoDetails.video_url,
        publishedAt: videoDetails.published_at,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        description: videoDetails.description,
      }
      this.setState({
        videoDetailsData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.setState({apiStatus: apiStatusConstants.success}, this.getVideoDetails)
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeStatus} = value
        console.log(themeStatus)

        const lightImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const darkImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        const failureImageUrl = themeStatus ? lightImage : darkImage

        return (
          <FailureContainer themeStatus={themeStatus}>
            <FailureImageElement src={failureImageUrl} />
            <FailureHeading themeStatus={themeStatus}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request.Please try
              again.
            </FailureDescription>
            <RetryButton data-testid="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoItemDetails = () => {
    const {videoDetailsData, likeStatus, dislikeStatus} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetailsData
    console.log(likeStatus)
    const formattedDate = publishedDate => {
      const yearsAgo = differenceInYears(new Date(), new Date(publishedDate))

      if (yearsAgo === 1) {
        return `1 year ago`
      }
      return `${yearsAgo} years ago`
    }

    const activeColor = likeStatus ? ' #3b82f6' : '#909090'
    console.log(activeColor)

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <VideoItemDetailsContainer themeStatus={themeStatus}>
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="60%"
                controls="true"
              />
              <VideoTitle themeStatus={themeStatus}>{title}</VideoTitle>
              <ViewsTimeLikesContainer>
                <ViewLikeContainer>
                  <ViewText>{viewCount} views</ViewText>
                  <BsDot />
                  <TimeText>{formattedDate(publishedAt)}</TimeText>
                </ViewLikeContainer>
                <LikesDislikesSaveContainer>
                  <ItemContainer onClick={this.onClickLikeButton}>
                    <BiLike
                      size={25}
                      color={likeStatus ? ' #3b82f6' : '#909090'}
                    />
                    <LikeText color={activeColor}>Like</LikeText>
                  </ItemContainer>
                  <ItemContainer onClick={this.onClickDislikeButton}>
                    <BiDislike
                      size={25}
                      color={dislikeStatus ? ' #3b82f6' : '#909090'}
                    />
                    <DisLikeText dislikeStatus={dislikeStatus}>
                      Dislike
                    </DisLikeText>
                  </ItemContainer>
                  <ItemContainer>
                    <MdPlaylistAdd color="#909090" />
                    <SaveText>Save</SaveText>
                  </ItemContainer>
                </LikesDislikesSaveContainer>
              </ViewsTimeLikesContainer>
              <HorizontalLine />
              <VideoDescriptionContainer>
                <DescProfileImage src={profileImageUrl} alt="profile image" />
                <ChannelSubDescContainer>
                  <ChannelSubscriberContainer>
                    <ChannelName themeStatus={themeStatus}>{name}</ChannelName>
                    <SubscribersCount themeStatus={themeStatus}>
                      {subscriberCount} subscribers
                    </SubscribersCount>
                  </ChannelSubscriberContainer>
                  <DesktopVideoDescription themeStatus={themeStatus}>
                    {description}
                  </DesktopVideoDescription>
                </ChannelSubDescContainer>
              </VideoDescriptionContainer>
              <MobileVideoDescription themeStatus={themeStatus}>
                {description}
              </MobileVideoDescription>
            </VideoItemDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoaderContainer = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderContainer()
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value

          return (
            <>
              <Header />
              <SideBarVideoItemDetailsContainer>
                <SideBar themeStatus={themeStatus} />
                {this.renderContent()}
              </SideBarVideoItemDetailsContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
