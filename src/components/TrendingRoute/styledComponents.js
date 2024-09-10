import styled from 'styled-components'

export const SideBarTrendingRouteContainer = styled.div`
  display: flex;
  width: 100%;
`

export const TrendingRouteContainer = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : ' #0f0f0f')};
  list-style-type: none;

  @media and screen (max-width: 576px) {
    display: none;
  }
`

export const TrendingLogoHeadingContainer = styled.div`
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
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.themeStatus ? ' #000000' : '#ffffff')};
  margin-left: 50px;
`
