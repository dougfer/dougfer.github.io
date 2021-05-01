import { Link } from 'react-router-dom';
import Styles from './Menu.module.css';

function Menu() {
  return(
    <nav className={Styles.menuContainer}>
      <Link to="/"><button className={Styles.home}>Home</button></Link>
      <Link to="dasdasda"><button>Projects</button></Link>
      <Link to="dasdasda"><button>Skills</button></Link>
      <Link to="dasdasda"><button className={Styles.sobre}>About</button></Link>
    </nav>
  )
}

export default Menu;
