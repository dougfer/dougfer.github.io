import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import Styles from './home.module.css';

function Home() {

  const {playing, light} = useContext(MyContext);

  return(
    <body className={playing ? Styles.claro : Styles.escuro}>
      Aqui é a página HOME
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 100)}%`}} className={Styles.sprite1} />}
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 100)}%`}} className={Styles.sprite2} />}
    </body>
  )
}

export default Home;
