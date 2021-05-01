import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Styles from './app.module.css';
import { useContext } from "react";
import MyContext from "./context/MyContext";



function App() {

  const {playing} = useContext(MyContext)
  return (
        <div className={playing ? Styles.claro : Styles.escuro}>
          <Header />
          <div className={Styles.divs}>
            <Menu />
            <div className={Styles.routeContainer}>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
  );
}

export default App;
