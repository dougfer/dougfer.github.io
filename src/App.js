import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Provider from "./context/Provider";
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </Provider>
  );
}

export default App;
