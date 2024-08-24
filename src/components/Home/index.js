import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'
import {MdSearch} from 'react-icons/md'

import HomeVideoItem from '../HomeVideoItem'

import {
  HomeContainer,
  BannerContainer,
  CrossButton,
  PremiumPlansTextContainer,
  NxtWatchImageElement,
  PremiumPlansText,
  GetItNowButton,
  HomeVideosContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
} from './styledComponents'

import Header from '../Header'

import NxtWatchContext from '../NxtWatchContext/context'

const LightThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  state = {
    themeStatus: true,
    showBannerPopup: true,
    searchInput: '',
    homeVideosData: [],
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
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

    if (response.ok === true) {
      const data = await response.json()

      const formattedHomeVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({homeVideosData: formattedHomeVideosData})
    }
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
              <AiOutlineClose size={25} color="#475569" />
            </CrossButton>
          </BannerContainer>
        )}
      </>
    )
  }

  render() {
    const {themeStatus, searchInput, homeVideosData} = this.state
    console.log(homeVideosData)

    return (
      <NxtWatchContext.Provider
        value={{themeStatus, changeThemeButton: this.changeThemeButton}}
      >
        <HomeContainer themeStatus={themeStatus}>
          <Header />
          {this.renderBanner()}
          <HomeVideosContainer themeStatus={themeStatus}>
            <SearchInputContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                themeStatus={themeStatus}
              />
              <SearchButton>
                <MdSearch size={22} />
              </SearchButton>
            </SearchInputContainer>
            <VideosContainer>
              {homeVideosData.map(eachVideo => (
                <HomeVideoItem
                  key={eachVideo.id}
                  eachVideoDetails={eachVideo}
                  themeStatus={themeStatus}
                />
              ))}
            </VideosContainer>
          </HomeVideosContainer>
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default Home
