import {Link} from 'react-router-dom'

import {
  GamingCardItem,
  ThumbnailImage,
  EachGameHeading,
  LiveViewCount,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const GamingCard = props => {
  const {eachGameDetails} = props
  const {thumbnailUrl, title, viewCount, id} = eachGameDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeStatus} = value

        return (
          <GamingCardItem>
            <Link to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} />
            </Link>
            <EachGameHeading themeStatus={themeStatus}>{title}</EachGameHeading>
            <LiveViewCount>{viewCount} Watching Worldwide</LiveViewCount>
          </GamingCardItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingCard
