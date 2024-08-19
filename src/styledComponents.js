import styled from 'styled-components'

export const LoginContainer = styled.div``

export const FormContainer = styled.form``

export const FormContainerImageElement = styled.img``

export const InputContainer = styled.div``

export const LabelElement = styled.label``

export const InputElement = styled.input``

export const ShowPasswordContainer = styled.div``

export const PasswordTickBox = styled.input``

export const PasswordLabelElement = styled.label``

export const LoginButton = styled.button``

export const HeaderNavContainer = styled.nav`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.activeThemeStatus ? '#ffffff' : '#000000'};
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 150px;
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

export const NavItem = styled.li``

export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
`

export const ProfileImageElement = styled.img`
  width: 28px;
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
`

export const HomeContainer = styled.div``
