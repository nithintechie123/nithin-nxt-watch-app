import {FaMoon} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'

import {FiLogOut} from 'react-icons/fi'
import {BsBrightnessHigh} from 'react-icons/bs'

import {
  HeaderNavContainer,
  WebsiteLogo,
  MobileNavItemsContainer,
  DesktopNavItemsContainer,
  NavItem,
  ProfileImageElement,
  LogoutButton,
  ThemeButton,
} from '../../styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const DarkThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeStatus, changeThemeButton} = value

      const onClickThemeButton = () => {
        changeThemeButton()
      }

      const activeWebsiteLogo = themeStatus
        ? LightThemeWebsiteLogo
        : DarkThemeWebsiteLogo

      const activeThemeLogo = themeStatus ? (
        <FaMoon size={20} />
      ) : (
        <BsBrightnessHigh size={20} color="white" />
      )

      return (
        <HeaderNavContainer activeThemeStatus={themeStatus}>
          <WebsiteLogo src={activeWebsiteLogo} alt="website logo" />
          <MobileNavItemsContainer>
            <NavItem>
              <ThemeButton type="button" onClick={onClickThemeButton}>
                {activeThemeLogo}
              </ThemeButton>
            </NavItem>
            <NavItem>
              <IoMenu size={22} color="white" />
            </NavItem>
            <NavItem>
              <FiLogOut size={22} />
            </NavItem>
          </MobileNavItemsContainer>
          <DesktopNavItemsContainer>
            <NavItem>
              <ThemeButton type="button" onClick={onClickThemeButton}>
                {activeThemeLogo}
              </ThemeButton>
            </NavItem>
            <NavItem>
              <ProfileImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </NavItem>
            <NavItem>
              <LogoutButton>Logout</LogoutButton>
            </NavItem>
          </DesktopNavItemsContainer>
        </HeaderNavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
