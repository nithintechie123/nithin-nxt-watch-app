import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {
  EachVideoItemContainer,
  VideoImageElement,
  ProfileImageElement,
  VideoDetailsContainer,
  VideoTextContainer,
  VideoHeading,
  VideoGenreName,
  ViewsTimeContainer,
  ViewsText,
  PublishedTimeText,
  ViewsCount,
} from './styledComponents'

const HomeVideoItem = props => {
  const {eachVideoDetails, themeStatus} = props
  const {
    name,
    thumbnailUrl,
    profileImageUrl,
    title,
    viewCount,
    publishedAt,
  } = eachVideoDetails

  const formattedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <EachVideoItemContainer>
      <VideoImageElement src={thumbnailUrl} alt={name} />
      <VideoDetailsContainer>
        <ProfileImageElement src={profileImageUrl} alt="profile" />
        <VideoTextContainer>
          <VideoHeading themeStatus={themeStatus}>{title}</VideoHeading>
          <VideoGenreName>{name}</VideoGenreName>
          <ViewsTimeContainer>
            <ViewsCount>
              {viewCount}
              <ViewsText>views</ViewsText>
            </ViewsCount>
            <BsDot />
            <PublishedTimeText>{formattedDate}</PublishedTimeText>
          </ViewsTimeContainer>
        </VideoTextContainer>
      </VideoDetailsContainer>
    </EachVideoItemContainer>
  )
}

export default HomeVideoItem
