import styled from 'styled-components'

export const SideBarVideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : '#181818')};
  padding: 10px;
  height: 100%;
  width: 100vw;
  @media screen and (min-width: 768px) {
    height: 100vh;
    background-size: cover;
  }
`

export const VideoTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.themeStatus ? '#475569' : '#ffffff')};
  margin-top: 20px;
`

export const ViewsTimeLikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ViewLikeContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  color: #909090;
  font-weight: 400;
`

export const ViewText = styled.p``

export const TimeText = styled.p``

export const LikesDislikesSaveContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 220px;
  margin: 0px;
`

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
`

export const IconText = styled.p`
  font-family: 'Roboto';
  margin-left: 10px;
  color: #909090;
  font-weight: 500;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  color: #d7dfe9;
  border: 1px solid;
`
export const VideoDescriptionContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
  }
`

export const DescProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const ChannelSubDescContainer = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
`

export const ChannelSubscriberContainer = styled.div``

export const ChannelName = styled.p`
  margin: 0px;
  font-size: 1rem;

  color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
`

export const SubscribersCount = styled.p`
  font-size: 13px;
  color: #909090;
`

export const MobileVideoDescription = styled.p`
  font-size: 13px;
  color: ${props => (props.themeStatus ? '#424242' : '#ffffff')};
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopVideoDescription = styled.p`
  font-size: 13px;
  color: ${props => (props.themeStatus ? '#424242' : '#ffffff')};
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
