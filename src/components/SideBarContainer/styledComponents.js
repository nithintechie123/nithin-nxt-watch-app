import styled from 'styled-components'

export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuContainer = styled.ul`
  width: 200px;
  padding: 0px;
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const MenuName = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
`
