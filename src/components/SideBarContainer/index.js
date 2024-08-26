import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {GrLinkedinOption} from 'react-icons/gr'

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

const SideBar = props => {
  const {themeStatus} = props

  return (
    <SideBarContainer themeStatus={themeStatus}>
      <MenuContainer>
        <MenuItem>
          <MdHome color="#616e7c" size={20} />
          <MenuName>Home</MenuName>
        </MenuItem>
        <MenuItem>
          <HiFire color="#616e7c" size={20} />
          <MenuName>Trending</MenuName>
        </MenuItem>
        <MenuItem>
          <SiYoutubegaming color="#616e7c" size={20} />
          <MenuName>Game</MenuName>
        </MenuItem>
        <MenuItem>
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
}

export default SideBar
