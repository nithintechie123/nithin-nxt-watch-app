import React from 'react'

const NxtWatchContext = React.createContext({
  themeStatus: false,
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
  changeThemeButton: () => {},
})

export default NxtWatchContext
