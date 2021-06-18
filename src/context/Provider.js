import React, { useEffect, useState } from 'react';
import MyContext from './MyContext'

function Provider({children}) {

  const [playing, setPlaying] = useState(false)
  const [light, setLight] = useState(false)
  const [dix, setDix] = useState(false);

  const setLightining = () => {
    if(!playing) {
      setLight(true);
  
      setTimeout(() => {
        setLight(false)
      }, 1000)
    }
  }

  const lightning = () => {
    setInterval(() => {
      setLightining();
    },5000)
  }

  useEffect(() => {
    lightning();
    document.title = "Meu Portifólio"
  }, [])

  const context = {
    playing,
    setPlaying,
    setLight,
    light,
    lightning,
    dix,
    setDix,
  }
  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;