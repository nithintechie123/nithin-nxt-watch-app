import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {FaFire} from 'react-icons/fa'

import {
  SideBarTrendingRouteContainer,
  TrendingRouteContainer,
  TrendingLogoHeadingContainer,
  LogoContainer,
  TrendingHeading,
  FailureContainer,
  FailureImageElement,
  FailureHeading,
  LoaderContainer,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBarContainer'
import TrendingVideoCard from '../TrendingVideoCard'

import NxtWatchContext from '../NxtWatchContext/context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingRoute extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingApiUrl, options)

    const data = await response.json()

    if (response.ok) {
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingVideosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.setState({apiStatus: apiStatusConstants.success}, this.getTrendingData)
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

  renderLoaderContainer = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingRoute = () => {
    const {trendingVideosList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <TrendingRouteContainer themeStatus={themeStatus}>
              <TrendingLogoHeadingContainer themeStatus={themeStatus}>
                <LogoContainer themeStatus={themeStatus}>
                  <FaFire color="#ff0b37" size="25" />
                </LogoContainer>
                <TrendingHeading themeStatus={themeStatus}>
                  Trending
                </TrendingHeading>
              </TrendingLogoHeadingContainer>
              {trendingVideosList.map(eachItem => (
                <TrendingVideoCard
                  key={eachItem.id}
                  eachVideoDetails={eachItem}
                />
              ))}
            </TrendingRouteContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderContainer()
      case apiStatusConstants.success:
        return this.renderTrendingRoute()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBarTrendingRouteContainer>
          <SideBar />
          {this.renderContent()}
        </SideBarTrendingRouteContainer>
      </>
    )
  }
}

export default TrendingRoute
