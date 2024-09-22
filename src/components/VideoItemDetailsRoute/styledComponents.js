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
  width: 250px;
  margin: 0px;
`

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`

export const LikeText = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
  font-weight: 500;
`
export const DisLikeText = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
  color: #909090;
  font-weight: 500;
`

export const SaveText = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
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
  align-items: column;

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
  font-family: 'Roboto';
  font-weight: 400;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopVideoDescription = styled.p`
  font-size: 13px;
  color: ${props => (props.themeStatus ? '#424242' : '#ffffff')};
  display: none;
  font-family: 'Roboto';
  font-weight: 400;

  @media screen and (min-width: 768px) {
    display: flex;
  }
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
