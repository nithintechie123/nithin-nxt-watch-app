import styled from 'styled-components'

export const SideBarVideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : '#181818')};
  width: 100vw;
  padding: 20px;
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
  font-weight: 400;
  font-family: 'Roboto';
  color: '#cccccc';
`

export const ViewCount = styled.p`
  margin: 2px;
  font-size: 14px;
`
export const ViewsText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-left: 4px;
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
`
