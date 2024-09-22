import {Link} from 'react-router-dom'

import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {GrLinkedinOption} from 'react-icons/gr'

import NxtWatchContext from '../NxtWatchContext/context'

import {
  SideBarContainer,
  MenuContainer,
  MenuItem,
  MenuName,
  FooterContainer,
  ContactUsHeading,
  LogosContainer,
  EachLogo,
  FooterDescription,
} from './styledComponents'

import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeStatus, changeActiveMenu, activeMenu} = value

      return (
        <SideBarContainer themeStatus={themeStatus}>
          <MenuContainer>
            <Link to="/" className="link">
              <MenuItem
                key="HOME"
                onClick={() => changeActiveMenu(activeMenuConstants.home)}
                isActive={activeMenu === activeMenuConstants.home}
              >
                <MdHome
                  color={
                    activeMenu === activeMenuConstants.home
                      ? '#ff0000'
                      : '#616e7c'
                  }
                  size={20}
                />
                <MenuName>Home</MenuName>
              </MenuItem>
            </Link>
            <Link to="/trending" className="link">
              <MenuItem
                key="TRENDING"
                onClick={() => changeActiveMenu(activeMenuConstants.trending)}
                isActive={activeMenu === activeMenuConstants.trending}
              >
                <HiFire
                  color={
                    activeMenu === activeMenuConstants.trending
                      ? '#ff0000'
                      : '#616e7c'
                  }
                  size={20}
                />
                <MenuName>Trending</MenuName>
              </MenuItem>
            </Link>
            <Link to="/gaming" className="link">
              <MenuItem
                key="GAMING"
                onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
                isActive={activeMenu === activeMenuConstants.gaming}
              >
                <SiYoutubegaming
                  color={
                    activeMenu === activeMenuConstants.gaming
                      ? '#ff0000'
                      : '#616e7c'
                  }
                  size={20}
                />
                <MenuName>Gaming</MenuName>
              </MenuItem>
            </Link>
            <Link to="/saved-videos" className="link">
              <MenuItem
                key="SAVED_VIDEOS"
                onClick={() =>
                  changeActiveMenu(activeMenuConstants.savedVideos)
                }
                isActive={activeMenu === activeMenuConstants.savedVideos}
              >
                <MdPlaylistAdd
                  color={
                    activeMenu === activeMenuConstants.savedVideos
                      ? '#ff0000'
                      : '#616e7c'
                  }
                  size={20}
                />
                <MenuName>Saved videos</MenuName>
              </MenuItem>
            </Link>
          </MenuContainer>
          <FooterContainer>
            <ContactUsHeading themeStatus={themeStatus}>
              CONTACT US
            </ContactUsHeading>
            <LogosContainer>
              <EachLogo hexCode="#1877F2">
                <FaFacebookF />
              </EachLogo>
              <EachLogo hexCode="#1DA1F2">
                <FaTwitter />
              </EachLogo>
              <EachLogo hexCode="#0077B5">
                <GrLinkedinOption />
              </EachLogo>
            </LogosContainer>
            <FooterDescription themeStatus={themeStatus}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </FooterContainer>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
