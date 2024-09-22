import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#f9f9f9' : '#212121')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuContainer = styled.ul`
  padding: 0px;
  margin-top: 50px;
  width: 220px;
`

export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 20px;
  height: 42px;
  background-color: ${props => (props.isActive ? '#e2e8f0' : 'transparent')};
`

export const MenuButton = styled.button``

export const MenuName = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 20px;
  font-weight: 500;
  color: #7e858e;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

export const ContactUsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.themeStatus ? '#00306e' : '#f1f1f1')};
`

export const LogosContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0px;
`

export const EachLogo = styled.li`
  margin-right: 10px;
  background-color: ${props => props.hexCode};
  color: #ffffff;
  border-radius: 24px;
  padding: 6px;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FooterDescription = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => (props.themeStatus ? '#383838' : '#f1f1f1')};
  line-height: 1.5;
`
