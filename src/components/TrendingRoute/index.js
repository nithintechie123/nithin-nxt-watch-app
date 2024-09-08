import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  SideBarTrendingRouteContainer,
  TrendingRouteContainer,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBarContainer'

class TrendingRoute extends Component {
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
    console.log(data)
  }

  render() {
    return (
      <>
        <Header />
        <SideBarTrendingRouteContainer>
          <SideBar />
          <TrendingRouteContainer>
            <h1>Hello</h1>
          </TrendingRouteContainer>
        </SideBarTrendingRouteContainer>
      </>
    )
  }
}

export default TrendingRoute
