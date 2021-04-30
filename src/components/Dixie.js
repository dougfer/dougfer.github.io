import { useContext } from "react";
import DixieF from '../util/Images/dixieF.gif';
import DixieB from '../util/Images/dixieB.gif';
import MyContext from "../context/MyContext";
import Styles from './Footer.module.css';


function Dixie() {
  const {playing, dix, setDix} = useContext(MyContext);

  return (
    <div>
      { playing && <img alt="" className={!dix ? Styles.dixieF : Styles.dixieB}  src={dix ? DixieF : DixieB} />}
    </div>
  )
}

export default Dixie;
