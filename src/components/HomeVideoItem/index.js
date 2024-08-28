import {Link} from 'react-router-dom'

import {differenceInYears} from 'date-fns'

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
    id,
  } = eachVideoDetails

  const formattedDate = publishedDate => {
    const yearsAgo = differenceInYears(new Date(), new Date(publishedDate))

    if (yearsAgo === 1) {
      return `1 year ago`
    }
    return `${yearsAgo} years ago`
  }

  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
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
              <PublishedTimeText>
                {formattedDate(publishedAt)}
              </PublishedTimeText>
            </ViewsTimeContainer>
          </VideoTextContainer>
        </VideoDetailsContainer>
      </EachVideoItemContainer>
    </Link>
  )
}

export default HomeVideoItem
