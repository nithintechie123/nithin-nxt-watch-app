import styled from 'styled-components'

export const SideBarGamingRouteContainer = styled.div`
  display: flex;
  width: 100%;
`

export const GamingRouteContainer = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : ' #0f0f0f')};
`

export const GamingLogoHeadingContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px;
  color: ;
  background-color: ${props => (props.themeStatus ? ' #ebebeb' : '#181818')};
`

export const LogoContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#d7dfe9' : ' #181818')};
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.themeStatus ? ' #000000' : '#ffffff')};
  margin-left: 50px;
`
export const GamingCardContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : '#181818')};
  width: 100%;
  height: 100vh;
  padding: 10px;
`

export const FailureImageElement = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.themeStatus ? '#0f0f0f' : '#ffffff')};
  text-align: center;
`

export const FailureDescription = styled.p`
  color: #909090;
  text-align: center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: 'white';
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  width: 100px;
  padding: 6px;
  border-width: 0px;
`

export const LoaderContainer = styled.div`
  margin: 150px;
  @media screen and (min-width: 768px) {
    margin-left: 300px;
  }
`
