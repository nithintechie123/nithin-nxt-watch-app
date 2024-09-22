import React from 'react'

const NxtWatchContext = React.createContext({
  themeStatus: false,
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
  changeThemeButton: () => {},
  likeStatus: false,
})

export default NxtWatchContext
