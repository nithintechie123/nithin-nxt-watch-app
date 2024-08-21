import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => props.loginBackgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  width: 300px;
  box-shadow: ${props =>
    props.themeStatus ? null : '10px 10px 20px 1px #e2e8f0'};
  border-radius: 10px;
  background-color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};

  @media screen and (max-width: 578px) {
    max-width: 80%;
  }
`

export const FormContainerImageElement = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LabelElement = styled.label`
  color: ${props => (props.themeStatus ? '#ffffff' : '#475569')};
  font-size: 15px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const InputElement = styled.input`
  padding: 8px;
  border-radius: 4px;
  border-width: 0px;
  border: 1px solid #94a3b8;
  background-color: ${props => (props.themeStatus ? 'transparent' : null)};
  outline: none;
`

export const ShowPasswordContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`

export const PasswordTickBox = styled.input`
  width: 20px;
  cursor: pointer;
  margin: 0px;
`

export const PasswordLabelElement = styled.label`
  color: #0f0f0f;
  font-family: 'Roboto';
  color: ${props => (props.themeStatus ? '#ffffff' : '000000')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-width: 0px;
  color: #ffffff;
  padding: 8px;
  cursor: pointer;
`

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
