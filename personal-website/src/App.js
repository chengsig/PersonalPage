import React, { Component } from 'react';
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/"
              render={() => <Home />} />
                        <Route exact path="/experience/"
                          render={() => <Experience />} />

            <Route exact path="/projects/"
                          render={() => <Projects />} />

            <Route exact path="/contact/"
              render={() => <Contact />} />

            <Route path="/"  //404-style message
              render={() => <NotFound />} />
          </Switch>
          <div className="icons">
            <a href="https://www.linkedin.com/in/chengsi-gao/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/chengsig"><i class="fab fa-github-square"></i></a>
            <a href="mailto:gaochengsi@gmail.com"><i class="fas fa-envelope-square"></i></a>
          </div> 
        </main>
      </div>
    );
  }
}

export default App;
