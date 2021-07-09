import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Styles from './app.module.scss';
import { useContext } from "react";
import MyContext from "./context/MyContext";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import MenuIcon from '@material-ui/icons/Menu';
import MenuPage from "./pages/MenuPage";
import { Link } from 'react-router-dom';


function App() {

  const {playing} = useContext(MyContext)
  return (
        <div className={playing ? Styles.claro : Styles.escuro}>
          <Link to="/menu"><MenuIcon style={{ fontSize: 50 }} className={Styles.menuIcon} color="secondary"  /></Link>
          <Header />
          <div className={Styles.divs}>
            <Menu />
            <div className={Styles.routeContainer}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/about" component={About} />
                <Route exact path="/menu" component={MenuPage} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
  );
}

export default App;
