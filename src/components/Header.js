import { AudioPlayerProvider } from "react-use-audio-player"
import AudioPlayer from "./AudioPlayer";
import Styles from './Header.module.css';

import song from'../util/Songs/donkey.mp3';
import { useContext } from "react";
import MyContext from "../context/MyContext";

function Header() {

  const {playing, light} = useContext(MyContext);

  return(
    <header className={Styles.header}>
      {/* <AudioPlayerProvider>
        <AudioPlayer file={song}/>
      </AudioPlayerProvider> */}
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 80)}%`}} className={Styles.sprite1} />}
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 80)}%`}} className={Styles.sprite2} />}
    </header>
  )
}

export default Header;
