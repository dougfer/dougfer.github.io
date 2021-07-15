import Styles from './About.module.scss';
import line from '../util/Images/line.png';
import profile from '../util/Images/profile.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';

function About() {

  const [show, setShow] = useState(false);

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.mainDiv}>
        <header className={Styles.header}>
          <h2>About</h2>
          <img src={line} alt="roots" />
        </header>
        <div  className={Styles.aboutSection}>
          <div style={  {"display": window.matchMedia("(max-width: 850px)").matches && show && "none"}} className={Styles.imageSection}>
            <img src={profile} alt="Profile" />
          </div>
          <div style={{"display": window.matchMedia("(max-width: 850px)").matches && !show && "none"}} className={Styles.dataSection}>
           <h4>Olá, meu nome é</h4><h2>Douglas Ferreira Pinto.</h2>

           <p>Residente de Belo Horizonte/MG ♥, sou uma pessoa tranquila, adoro conhecer novas tecnologias, jogos, assistir filmes e séries.</p>

           <p>Através do curso de Desenvolvimento Web na Trybe, percebi que encontrei que encontrei a minha vocação e paixão nos códigos ♥ </p>

           <p>Com muita perseverança, sigo na busca pela evolução da vida profissional e pessoal.</p>

           <footer>
            Gostou ?
            <br></br>
            Entre em contato:
            <br></br>
            <div>
              <a without rel="noreferrer" href="https://www.linkedin.com/in/devdougferreira/" target="_blank"><LinkedInIcon style={{ fontSize: 40 }} /></a>
              <a without rel="noreferrer" href="https://web.whatsapp.com/send?phone=5531993249396" target="_blank"><WhatsAppIcon style={{ fontSize: 40 }} /></a>
              <a without rel="noreferrer" href="https://github.com/dougfer" target="_blank"><GitHubIcon style={{ fontSize: 40 }} /></a>
            </div>
          </footer>
          </div>
          {window.matchMedia("(max-width: 850px)").matches ?
          <div className={Styles.icons}>
            <span onClick={() => setShow(false)} ><NavigateBeforeIcon  color="primary" style={{ fontSize: 60, "display": !show && "none", cursor: "pointer"}} /></span>
            <span onClick={() => setShow(true)}><NavigateNextIcon color="primary" style={{ fontSize: 60, "display": show && "none", cursor: "pointer"}}  /></span>
          </div> 
          :''}

        </div>
      </div>
    </div>
  )
}

export default About;
