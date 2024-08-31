import styled from 'styled-components'

export const SideBarVideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : '#181818')};
  padding: 20px;
  height: 100%;

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

export const ViewTimeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewCount = styled.p`
  margin: 2px;
  font-size: 14px;
  color: 'red';
  font-weight: 500;
  color: '#cccccc';
`

export const PublishedTimeText = styled.p`
  margin: 2px;
  font-size: 13px;
`

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
  display: flex;
  align-items: flex-start;
  font-family: 'Roboto';
`

export const DescProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const ChannelSubDescContainer = styled.div``

export const ChannelSubscriberContainer = styled.div`
  font-family: 'Roboto';
`

export const ChannelName = styled.h1`
  margin: 0px;
  font-size: 1rem;
`

export const SubscribersCount = styled.p`
  font-size: 13px;
`

export const VideoDescription = styled.p`
  font-size: 13px;
`
