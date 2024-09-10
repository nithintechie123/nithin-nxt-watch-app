import styled from 'styled-components'

export const SideBarNotFoundContainer = styled.div`
  display: flex;
  width: 100%;
`
export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => (props.themeStatus ? ' #f4f4f4' : ' #0f0f0f')};
`

export const NotFoundImage = styled.img`
  max-width: 300px;
`

export const NotFoundHeading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
`

export const NotFoundDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  color: #616e7c;
`
