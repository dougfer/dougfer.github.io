import React, { useState } from 'react';
import MyContext from './MyContext'

function Provider({children}) {

  const [playing, setPlaying] = useState(false)

  const context = {
    playing,
    setPlaying
  }
  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;