import {MdHome} from 'react-icons/md'

import {
  SideBarContainer,
  MenuContainer,
  MenuItem,
  MenuName,
} from './styledComponents'

const SideBar = () => (
  <SideBarContainer>
    <MenuContainer>
      <MenuItem>
        <MdHome />
        <MenuName>Home</MenuName>
      </MenuItem>
      <MenuItem>
        <MenuName>Trending</MenuName>
      </MenuItem>
      <MenuItem>
        <MenuName>Game</MenuName>
      </MenuItem>
      <MenuItem>
        <MenuName>Saved videos</MenuName>
      </MenuItem>
    </MenuContainer>
  </SideBarContainer>
)

export default SideBar
