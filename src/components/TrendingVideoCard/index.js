import {
  TrendingVideoCardContainer,
  TrendingVideoImage,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const TrendingVideoCard = props => {
  const {eachVideoDetails} = props
  const {thumbnailUrl} = eachVideoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeStatus} = value
        console.log(themeStatus)

        return (
          <TrendingVideoCardContainer>
            <TrendingVideoImage src={thumbnailUrl} />
          </TrendingVideoCardContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoCard
