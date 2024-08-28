import styled from 'styled-components'

export const HeaderNavContainer = styled.nav`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${props =>
    props.activeThemeStatus ? '#ffffff' : '#212121'};
`

export const WebsiteLogo = styled.img`
  width: 100px;
  cursor: pointer;
   transition: background-color 0.3s, transform 0.3s;
    &:hover {
    background-color:"transparent"; 
    transform: scale(1.05);

  @media screen and (min-width: 768px) {
    width: 120px;
  } ;
`

export const MobileNavItemsContainer = styled.ul`
  margin: 0px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopNavItemsContainer = styled.ul`
  margin: 0px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
   transition: background-color 0.3s, transform 0.3s;
    &:hover {
    background-color:"transparent"; 
    transform: scale(1.1);
`

export const ProfileImageElement = styled.img`
  width: 28px;
   transition: background-color 0.3s, transform 0.3s;
    &:hover {
    background-color:"transparent"; 
    transform: scale(1.05);
`

export const LogoutButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  padding: 5px;
  width: 80px;
  border-radius: 4px;
   transition: background-color 0.3s, transform 0.3s;
    &:hover {
    background-color:#ffffff; 
    transform: scale(1.05);

`
