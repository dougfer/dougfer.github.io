import { Link } from 'react-router-dom';
import Styles from './MenuPage.module.scss';

function MenuPage() {
  return (
    <div className={Styles.menuContainer}>
      <Link to="/"><button>Home</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/skills"><button>Skills</button></Link>
      <Link to="about"><button>About</button></Link>
    </div>
  )
}

export default MenuPage;
