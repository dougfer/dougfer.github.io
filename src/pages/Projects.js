import Styles from './Projects.module.css';
import line from '../util/Images/line.png'
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import data from '../util/projectsData/data';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function Projects() {

  const [index, setIndex] = useState(0)

  const handleNext = () => {
    (index + 1) === data.length ? setIndex(0) : setIndex(index + 1) 
  }

  const handleBefore = () => {
    (index - 1) < 0 ? setIndex(data.length - 1) : setIndex(index -1)
  }

  return(
    <div className={Styles.mainContainer}>
      <div className={Styles.mainDiv}>
        <header className={Styles.header}>
          <h2>Projects</h2>
          <img src={line} alt="roots"/>
        </header>
        {window.matchMedia("(max-width: 414px)").matches ?
          <div className={Styles.projectContainer}> 
            <ProjectCard data={data[index]}/>
          </div>
        : <div className={Styles.projectContainer}>
          {data.map((project) => <ProjectCard data={project} key={project.name} />)}
        </div>}
        {window.matchMedia("(max-width: 414px)").matches ?
        <div className={Styles.navigate}>
          <NavigateBeforeIcon onClick={handleBefore} color="primary" style={{ fontSize: 60}} />
          <NavigateNextIcon onClick={handleNext} color="primary" style={{ fontSize: 60 }} />
        </div> : ''}
      </div>
    </div>
  )
}

export default Projects;
