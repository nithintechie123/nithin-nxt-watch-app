import styled from 'styled-components'

export const TrendingVideoCardContainer = styled.li`
  margin: 20px;
  display: flex;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const TrendingVideoImage = styled.img`
  width: 300px;
  margin-right: 10px;

  @media screen and (max-width: 576px) {
    width: 250px;
  }
`

export const TrendingVideoTextContainer = styled.div`
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const TrendingVideoTitle = styled.h1`
  margin: 0px;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};

  @media screen and (max-width: 576px) {
    font-size: 13px;
    font-weight: 500;
    color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
  }
`

export const TrendingVideoName = styled.p`
  color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};

  @media screen and (max-width: 576px) {
    font-size: 12px;
    color: #616e7c;
    font-weight: 500;
    margin: 0px;
  }
`

export const ViewsTimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #616e7c;
  font-weight: 500;
`

export const ViewsCount = styled.p`
  margin: 2px;
  font-size: 13px;
`
export const ViewsText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-left: 2px;
`

export const PublishedTimeText = styled.p`
  margin: 2px;
  font-size: 12px;
`
export const MobileViewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const MobileProfileTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const MobileViewsTimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #616e7c;
  font-weight: 500;
`

export const MobileProfileImage = styled.img`
  width: 30px;
  margin-right: 10px;
`
