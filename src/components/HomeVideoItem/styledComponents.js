import styled from 'styled-components'

export const EachVideoItemContainer = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const VideoImageElement = styled.img`
  max-width: 240px;

  @media screen and (min-width: 768px) {
    width: 250px;
  } ;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ProfileImageElement = styled.img`
  width: 30px;
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between
  align-items: flex-start;
  font-family: 'Roboto';
  width: 200px;
`

export const VideoHeading = styled.h1`
  margin: 2px;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 500;
  color: ${props => (props.themeStatus ? '#475569' : '#ffffff')};
`

export const VideoGenreName = styled.p`
  margin: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #616e7c;
`

export const ViewsTimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #616e7c;
  font-weight: 400;
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
