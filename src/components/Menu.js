import { Link } from 'react-router-dom';
import Styles from './Menu.module.css';

function Menu() {
  return(
    <nav className={Styles.menuContainer}>
      <Link to="/"><button className={Styles.home}>Home</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/skills"><button>Skills</button></Link>
      <Link to="about"><button className={Styles.sobre}>About</button></Link>
    </nav>
  )
}

export default Menu;
