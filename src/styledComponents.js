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
  height: 320px;
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
  background-color: ${props => (props.themeStatus ? 'transparent' : '#f1f5f9')};
  outline: none;
  color: ${props => (props.themeStatus ? '#ffffff' : '#000000')};
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

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
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

export const CrossButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  @media screen and (min-width: 578px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
    background-size: cover;
    position: relative;
  } ;
`

export const PremiumPlansTextContainer = styled.div``

export const NxtWatchImageElement = styled.img`
  width: 150px;
`

export const PremiumPlansText = styled.p`
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #383838;
  max-width: 250px;
`

export const GetItNowButton = styled.button`
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  font-weight: 450;
  background-color: transparent;
  padding: 8px;
`

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#0f0f0f' : ' #f1f1f1')};
  height: 100vh;
`
