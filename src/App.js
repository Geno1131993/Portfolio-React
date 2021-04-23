import './App.css';
import React, {Component} from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Home} 
          exact/>
          <Route path = "/about" component = {About}/>
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/contact" component = {Contact}/>
        </Switch>
      </BrowserRouter>
    );
  }
}





export default App;
