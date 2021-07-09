import { useContext } from 'react';
import MyContext from '../context/MyContext';
import Styles from './Home.module.scss';

function Home() {

  const {playing, light} = useContext(MyContext);

  return(
    <body>
      <main className={Styles.mainContainer}>
        <div>
          {<img className={light && !playing && Styles.h2Hide} src="https://fontmeme.com/permalink/210504/7e07449c6e32de3ff76e75fd554c1bce.png" alt="donkey-kong-font" border="0" />}
        </div>
      </main>
    </body>
  )
}

export default Home;
