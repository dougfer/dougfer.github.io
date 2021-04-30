import { AudioPlayerProvider } from "react-use-audio-player"
import AudioPlayer from "./AudioPlayer";
import Styles from './Header.module.css';

import song from'../util/Songs/donkey.mp3';

function Header() {
  return(
    <header className={Styles.header}>
      <AudioPlayerProvider>
        <AudioPlayer file={song}/>
      </AudioPlayerProvider>
    </header>
  )
}

export default Header;
