import { useContext } from 'react';
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
          {<img className={light && !playing && Styles.h2Hide} src="https://fontmeme.com/permalink/210504/7e07449c6e32de3ff76e75fd554c1bce.png" alt="donkey-kong-font" border="0" />}
        </div>
      </main>
    </body>
  )
}

export default Home;
