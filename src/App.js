import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


//Add the 4 Elements and Nav Styles
import Home from './Components/Home';
import ContactContainer from './Components/ContactContainer';
import NotFound from './Components/404';
import Footer from './Components/Footer';


import './Styles/navStyles.css';
import ProjectContainer from './Components/ProjectContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <div className="navContainer">
              <div className="navItem">
                <Link to="/home">Home</Link>
              </div>
              <div className="navItem">
                <Link to="/work">Work</Link>
              </div>
              <div className="navItem">
                <Link to="/contact">Contact</Link>
              </div>  
          </div> 
            <Switch> 
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/work" component={ProjectContainer} />
              <Route path="/contact" component={ContactContainer} />
              <Route path='*' exact={true} component={NotFound}/>
              </Switch>
          </div>
         
        </Router>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
