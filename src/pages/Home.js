import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import Styles from './home.module.css';

function Home() {

  const {playing, light} = useContext(MyContext);

  return(
    <body>
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 90)}%`}} className={Styles.sprite1} />}
      {!playing && <div  style={{"display" : !light && "none", "margin-left" : `${Math.floor(Math.random() * 90)}%`}} className={Styles.sprite2} />}
      <main className={Styles.mainContainer}>
        <div className={playing ? Styles.mainClaro : Styles.mainEscuro}>
          <h2>HELLO WORLD <br /> {`</> `} </h2>
        </div>
      </main>
    </body>
  )
}

export default Home;
