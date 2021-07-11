import Styles from './ModalCard.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import CloseIcon from '@material-ui/icons/Close';

function ModalCard({projectData, close}) {
  return (
    <div className={Styles.cardContainer}>
      <CloseIcon onClick={() => close(false)} className={Styles.close} fontSize="large"  color="primary" />
      <div>
        <h2>{projectData.name}</h2>
        <p>{projectData.description}</p>
      </div>
      <div>
        <ul>Tecnologias utilizadas:
          {projectData.tech.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <div className={Styles.links}>
        <a href={projectData.githubLink} target="_blank"><GitHubIcon fontSize="large" /></a>
        { projectData.githubPage ?  <a href={projectData.githubPage} target="_blank"><ComputerIcon fontSize="large" /></a> : ''}
      </div>
    </div>
  )
}

export default ModalCard;
