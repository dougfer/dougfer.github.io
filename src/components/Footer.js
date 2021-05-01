import Styles from './Footer.module.css';
import Dixie from './Dixie';
import background from '../util/Images/FooterBackground.png';

function Footer() {
  return(
    <footer className={Styles.footer}>
      {/* <img src={background} /> */}
      <Dixie />
    </footer>
  )
}

export default Footer;

