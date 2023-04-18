import React from 'react';

import { NavProvider } from "./contexts/NavContext"

const WrapRootElement = ({ children }) => {
  return (
    <NavProvider>
      {children}
    </NavProvider>
  )
}

export default WrapRootElement
