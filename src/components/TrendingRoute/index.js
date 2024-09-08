import {Component} from 'react'

import Cookies from 'js-cookie'

import {FaFire} from 'react-icons/fa'

import {
  SideBarTrendingRouteContainer,
  TrendingRouteContainer,
  TrendingLogoHeadingContainer,
  LogoContainer,
  TrendingHeading,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBarContainer'
import TrendingVideoCard from '../TrendingVideoCard'

import NxtWatchContext from '../NxtWatchContext/context'

class TrendingRoute extends Component {
  state = {trendingVideosList: []}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingApiUrl, options)

    const data = await response.json()

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

    this.setState({trendingVideosList: formattedData})
  }

  render() {
    const {trendingVideosList} = this.state
    console.log(trendingVideosList)

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          console.log(themeStatus)
          return (
            <>
              <Header />
              <SideBarTrendingRouteContainer>
                <SideBar />
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
              </SideBarTrendingRouteContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingRoute
