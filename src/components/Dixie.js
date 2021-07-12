import { useContext } from "react";
import DixieB from '../util/Images/dixieB.gif';
import MyContext from "../context/MyContext";
import Styles from './Footer.module.css';


function Dixie() {
  const {playing} = useContext(MyContext);

  return (
    <div>
      { playing && <img alt="" className={Styles.dixieB}  src={DixieB} />}
    </div>
  )
}

export default Dixie;
