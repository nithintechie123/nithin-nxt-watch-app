import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import {
  FailureContainer,
  FailureImageElement,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoaderContainer,
  GamingRouteContainer,
  GamingLogoHeadingContainer,
  GamingHeading,
  SideBarGamingRouteContainer,
  LogoContainer,
  GamingCardContainer,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'
import Header from '../Header'
import SideBar from '../SideBarContainer'
import GamingCard from '../GamingCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class GamingRoute extends Component {
  state = {gamingDetailsList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingDetailsList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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

  renderGamingDetails = () => {
    const {gamingDetailsList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          console.log(themeStatus)
          return (
            <GamingRouteContainer themeStatus={themeStatus}>
              <GamingLogoHeadingContainer themeStatus={themeStatus}>
                <LogoContainer themeStatus={themeStatus}>
                  <SiYoutubegaming color="#ff0b37" size="25" />
                </LogoContainer>
                <GamingHeading themeStatus={themeStatus}>Gaming</GamingHeading>
              </GamingLogoHeadingContainer>
              <GamingCardContainer>
                {gamingDetailsList.map(eachGame => (
                  <GamingCard key={eachGame.id} eachGameDetails={eachGame} />
                ))}
              </GamingCardContainer>
            </GamingRouteContainer>
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
        return this.renderGamingDetails()
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
        <SideBarGamingRouteContainer>
          <SideBar />
          {this.renderContent()}
        </SideBarGamingRouteContainer>
      </>
    )
  }
}

export default GamingRoute
