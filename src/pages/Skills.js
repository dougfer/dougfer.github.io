import Styles from './Skills.module.scss';
import line from '../util/Images/line.png';

function Skills() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.mainDiv}>
        <header className={Styles.header}>
          <h2>Skills</h2>
          <img src={line} />
        </header>
        <div className={Styles.mainSection}>
          <section className={Styles.section1}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Context API</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Styled Components</li>
              <li>RTL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Node.Js</li>
              <li>Express</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skills;
