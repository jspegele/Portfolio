import React, { useState, createContext } from "react"

export const NavContext = createContext()

const initialState = {
  active: null,
}

export const NavProvider = props => {
  const [navState, setNavState] = useState(initialState)
  const clearNavState = () => setNavState(initialState)
  const setActiveNavItem = active =>
    setNavState(prevState => ({ ...prevState, active }))
  const selectActiveNavItem = () => navState.active

  return (
    <NavContext.Provider
      value={{
        setNavState,
        clearNavState,
        setActiveNavItem,
        selectActiveNavItem,
      }}
    >
      {props.children}
    </NavContext.Provider>
  )
}

export default NavProvider
