import {FaMoon} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import {
  HeaderNavContainer,
  WebsiteLogo,
  MobileNavItemsContainer,
  DesktopNavItemsContainer,
  NavItem,
  ProfileImageElement,
  LogoutButton,
} from '../../styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeStatus} = value
      console.log(themeStatus)
      return (
        <HeaderNavContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <MobileNavItemsContainer>
            <NavItem>
              <FaMoon size={20} />
            </NavItem>
            <NavItem>
              <IoMenu size={22} />
            </NavItem>
            <NavItem>
              <FiLogOut size={22} />
            </NavItem>
          </MobileNavItemsContainer>
          <DesktopNavItemsContainer>
            <NavItem>
              <FaMoon size={22} />
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
