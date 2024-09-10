import {differenceInYears} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {
  TrendingVideoCardContainer,
  TrendingVideoImage,
  TrendingVideoTextContainer,
  TrendingVideoTitle,
  TrendingVideoName,
  ViewsTimeContainer,
  ViewsCount,
  ViewsText,
  PublishedTimeText,
  MobileViewTextContainer,
  MobileViewsTimeContainer,
  MobileProfileImage,
  MobileProfileTextContainer,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const TrendingVideoCard = props => {
  const {eachVideoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = eachVideoDetails

  const formattedDate = publishedDate => {
    const yearsAgo = differenceInYears(new Date(), new Date(publishedDate))

    if (yearsAgo === 1) {
      return `1 year ago`
    }
    return `${yearsAgo} years ago`
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeStatus} = value

        return (
          <TrendingVideoCardContainer>
            <TrendingVideoImage src={thumbnailUrl} />
            <MobileProfileTextContainer>
              <MobileProfileImage src={channel.profileImageUrl} />
              <MobileViewTextContainer>
                <TrendingVideoTitle themeStatus={themeStatus}>
                  {title}
                </TrendingVideoTitle>
                <MobileViewsTimeContainer>
                  <TrendingVideoName themeStatus={themeStatus}>
                    {channel.name}
                  </TrendingVideoName>
                  <BsDot />
                  <ViewsCount>
                    {viewCount}
                    <ViewsText>views </ViewsText>
                  </ViewsCount>
                  <BsDot />
                  <PublishedTimeText>
                    {formattedDate(publishedAt)}
                  </PublishedTimeText>
                </MobileViewsTimeContainer>
              </MobileViewTextContainer>
            </MobileProfileTextContainer>
            <TrendingVideoTextContainer>
              <TrendingVideoTitle themeStatus={themeStatus}>
                {title}
              </TrendingVideoTitle>
              <TrendingVideoName themeStatus={themeStatus}>
                {channel.name}
              </TrendingVideoName>
              <ViewsTimeContainer>
                <ViewsCount>
                  {viewCount}
                  <ViewsText>views </ViewsText>
                </ViewsCount>
                <BsDot />
                <PublishedTimeText>
                  {formattedDate(publishedAt)}
                </PublishedTimeText>
              </ViewsTimeContainer>
            </TrendingVideoTextContainer>
          </TrendingVideoCardContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoCard
