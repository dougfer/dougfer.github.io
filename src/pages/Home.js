import { useContext } from 'react';
import MyContext from '../context/MyContext';
import Styles from './home.module.css';

function Home() {

  const {playing} = useContext(MyContext);

  return(
    <div className={!playing ? Styles.claro : Styles.escuro}>
      Aqui é a página HOME
    </div>
  )
}

export default Home;
