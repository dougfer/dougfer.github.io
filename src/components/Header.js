import Styles from './Header.module.css';

import { useContext } from "react";
import MyContext from "../context/MyContext";

function Header() {

  const {playing, light} = useContext(MyContext);

  return(
    <header className={Styles.header}>
      {!playing && !window.matchMedia("(max-width: 500px)").matches && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 80)}%`}} className={Styles.sprite1} />}
      {!playing && !window.matchMedia("(max-width: 500px)").matches && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 80)}%`}} className={Styles.sprite2} />}
    </header>
  )
}

export default Header;
