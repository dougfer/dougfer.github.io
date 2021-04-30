import Styles from './Footer.module.css';
import Dixie from './Dixie';

function Footer() {
  return(
    <footer className={Styles.footer}>
      Aqui é o footer
      <Dixie />
    </footer>
  )
}

export default Footer;

