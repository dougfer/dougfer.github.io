import Styles from './Projects.module.css';
import line from '../util/Images/line.png'
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import data from '../util/projectsData/data';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function Projects() {

  const [index, setIndex] = useState(0)

  const [fullIndex1, setFullIndex1] = useState(0)
  const [fullIndex2, setFullIndex2] = useState(1)

  const handleNext = () => {
    (index + 1) === data.length ? setIndex(0) : setIndex(index + 1) 
  }

  const handleBefore = () => {
    (index - 1) < 0 ? setIndex(data.length - 1) : setIndex(index -1)
  }

  const handleFullNext = () => {
    if((fullIndex2 + 1) === data.length) {
      setFullIndex2(0);
      setFullIndex1(fullIndex1 + 1);
    }else if((fullIndex1 + 1 === data.length)) {
      setFullIndex1(0);
      setFullIndex2(fullIndex2 + 1)
    } else {
      setFullIndex1(fullIndex1 + 1);
      setFullIndex2(fullIndex2 + 1)
    }

  }

  const handleFullBefore = () => {
    if((fullIndex1 - 1) < 0) {
      setFullIndex1(data.length -1);
      setFullIndex2(fullIndex2 - 1);
    }else if((fullIndex2 - 1) < 0) {
      setFullIndex2(data.length -1);
      setFullIndex1(fullIndex1 -1);
    } else {
      setFullIndex1(fullIndex1 - 1);
      setFullIndex2(fullIndex2 -1)
    }
  }

  return(
    <div className={Styles.mainContainer}>
      <div className={Styles.mainDiv}>
        <header className={Styles.header}>
          <h2>Projects</h2>
          <img src={line} alt="roots"/>
        </header>
        {window.matchMedia("(max-width: 850px)").matches ?
          <div className={Styles.projectContainer}> 
            <ProjectCard data={data[index]}/>
          </div>
        : <div className={Styles.projectContainer}>
          <ProjectCard data={data[fullIndex1]} />
          <ProjectCard data={data[fullIndex2]} />
        </div>}
        {window.matchMedia("(max-width: 850px)").matches ?
        <div className={Styles.navigate}>
          <NavigateBeforeIcon onClick={handleBefore} color="primary" style={{ fontSize: 60, cursor: "pointer"}} />
          <NavigateNextIcon onClick={handleNext} color="primary" style={{ fontSize: 60, cursor: "pointer" }} />
        </div> : ''}
        <div className={Styles.navigate}>
          <span><NavigateBeforeIcon onClick={() => handleFullBefore()} color="primary" style={{ fontSize: 60}} /></span>
          <span><NavigateNextIcon onClick={() => handleFullNext()} color="primary" style={{ fontSize: 60}} /></span>
        </div>
      </div>
    </div>
  )
}

export default Projects;
