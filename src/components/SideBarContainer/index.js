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

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeStatus} = value
      return (
        <SideBarContainer themeStatus={themeStatus}>
          <MenuContainer>
            <Link to="/" className="link">
              <MenuItem key="HOME">
                <MdHome color="#616e7c" size={20} />
                <MenuName>Home</MenuName>
              </MenuItem>
            </Link>
            <Link to="/trending" className="link">
              <MenuItem key="TRENDING">
                <HiFire color="#616e7c" size={20} />
                <MenuName>Trending</MenuName>
              </MenuItem>
            </Link>
            <Link to="/gaming" className="link">
              <MenuItem key="GAMING">
                <SiYoutubegaming color="#616e7c" size={20} />
                <MenuName>Gaming</MenuName>
              </MenuItem>
            </Link>
            <MenuItem key="SAVED_VIDEOS">
              <MdPlaylistAdd color="#616e7c" size={20} />
              <MenuName>Saved videos</MenuName>
            </MenuItem>
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
