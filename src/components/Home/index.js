import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'

import {
  HomeContainer,
  BannerContainer,
  CrossButton,
  PremiumPlansTextContainer,
  NxtWatchImageElement,
  PremiumPlansText,
  GetItNowButton,
  HomeVideosContainer,
} from '../../styledComponents'

import Header from '../Header'

import NxtWatchContext from '../NxtWatchContext/context'

const LightThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  state = {themeStatus: false, showBannerPopup: true}

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const homeVideosUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(homeVideosUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  changeThemeButton = () => {
    this.setState(prevState => ({
      themeStatus: !prevState.themeStatus,
    }))
  }

  onClickCross = () => {
    this.setState(prevState => ({
      showBannerPopup: !prevState.showBannerPopup,
    }))
  }

  renderBanner = () => {
    const {showBannerPopup} = this.state
    return (
      <>
        {showBannerPopup && (
          <BannerContainer>
            <PremiumPlansTextContainer>
              <NxtWatchImageElement src={LightThemeWebsiteLogo} />
              <PremiumPlansText>
                Buy Nxt Watch Premium prepaid plans with UPI
              </PremiumPlansText>
              <GetItNowButton>GET IT NOW</GetItNowButton>
            </PremiumPlansTextContainer>
            <CrossButton type="button" onClick={this.onClickCross}>
              <AiOutlineClose />
            </CrossButton>
          </BannerContainer>
        )}
      </>
    )
  }

  render() {
    const {themeStatus} = this.state

    return (
      <NxtWatchContext.Provider
        value={{themeStatus, changeThemeButton: this.changeThemeButton}}
      >
        <HomeContainer>
          <Header />
          {this.renderBanner()}
          <HomeVideosContainer themeStatus={themeStatus}>
            <h1>Nithin</h1>
          </HomeVideosContainer>
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default Home
