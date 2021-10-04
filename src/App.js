import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

         <Route path="/aboutUs">
            <About></About>
          </Route>

        <Route path="/contact">
            <Contact></Contact>
          </Route>
          
          <Route>
      <NotFound></NotFound>
            
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
