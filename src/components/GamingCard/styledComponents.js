import styled from 'styled-components'

export const GamingCardItem = styled.li`
  margin: 8px;
  width: 20%;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    width: 40%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const EachGameHeading = styled.p`
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 3px;
  color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
`

export const LiveViewCount = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #616e7c;
  margin: 0px;
`
