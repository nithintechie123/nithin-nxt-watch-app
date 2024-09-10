import {
  GamingCardItem,
  ThumbnailImage,
  EachGameHeading,
  LiveViewCount,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const GamingCard = props => {
  const {eachGameDetails} = props
  const {thumbnailUrl, title, viewCount} = eachGameDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeStatus} = value

        return (
          <GamingCardItem>
            <ThumbnailImage src={thumbnailUrl} />
            <EachGameHeading themeStatus={themeStatus}>{title}</EachGameHeading>
            <LiveViewCount>{viewCount} Watching Worldwide</LiveViewCount>
          </GamingCardItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingCard
