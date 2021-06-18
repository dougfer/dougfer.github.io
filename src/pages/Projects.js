import Styles from './Projects.module.css';
import { Carousel } from 'react-responsive-carousel';
import line from '../util/Images/line.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Projects() {
  return(
    <div className={Styles.mainContainer}>
      <div className={Styles.mainDiv}>
        <header className={Styles.header}>
          <h2>Projects</h2>
          <img src={line} />
        </header>
      </div>
    </div>
  )
}

export default Projects;
