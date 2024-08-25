import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.themeStatus ? ' #f9f9f9' : '#181818')};
  height: 100%;
  display: flex;
`

export const BannerHomeVideosContainer = styled.div``

export const CrossButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');

  @media screen and (min-width: 578px) {
    background-size: cover;
    width: 100vw;
    height: 200px;
  }
`

export const PremiumPlansTextContainer = styled.div``

export const NxtWatchImageElement = styled.img`
  width: 150px;
`

export const PremiumPlansText = styled.p`
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #383838;
  max-width: 250px;
`

export const GetItNowButton = styled.button`
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  font-weight: 450;
  background-color: transparent;
  padding: 8px;
`

export const HomeVideosContainer = styled.div`
  padding: 20px;
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  border-radius: 2px;
   transition: background-color 0.3s, transform 0.3s;
    &:hover {
    background-color:"transparent"; 
    transform: scale(1.05);
`

export const SearchInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  width: 100%;
  outline: none;
  border: 1px solid #ebebeb;
  padding: 5px;
  background-color: ${props => (props.themeStatus ? '#f1f1f1' : 'transparent')};
`

export const SearchButton = styled.button`
  outline: none;
  border-width: 0px;
  padding: 3px;
  text-align: center;
  background-size: cover;
  border: 2px solid #ebebeb;
  width: 80px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const VideosContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
