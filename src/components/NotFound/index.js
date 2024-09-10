import {
  SideBarNotFoundContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'
import Header from '../Header'
import SideBar from '../SideBarContainer'

const notFoundLightThemeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const notFoundDarkThemeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeStatus} = value
      console.log(themeStatus)

      const ActiveImageUrl = themeStatus
        ? notFoundLightThemeImageUrl
        : notFoundDarkThemeImageUrl
      return (
        <>
          <Header />
          <SideBarNotFoundContainer>
            <SideBar />
            <NotFoundContainer themeStatus={themeStatus}>
              <NotFoundImage src={ActiveImageUrl} alt="not found" />
              <NotFoundHeading themeStatus={themeStatus}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </SideBarNotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
