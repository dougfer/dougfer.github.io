import { Link } from 'react-router-dom';
import { AudioPlayerProvider } from 'react-use-audio-player';
import AudioPlayer from './AudioPlayer';
import Styles from './Menu.module.scss';
import song from'../util/Songs/donkey.mp3';


function Menu() {
  return(
    <nav className={Styles.menuContainer}>
      <div className={Styles.Cranky}>
        <AudioPlayerProvider>
          <AudioPlayer file={song}/>
        </AudioPlayerProvider>
      </div>
      <Link to="/"><button className={Styles.home}>Home</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/skills"><button>Skills</button></Link>
      <Link to="about"><button className={Styles.sobre}>About</button></Link>
    </nav>
  )
}

export default Menu;
