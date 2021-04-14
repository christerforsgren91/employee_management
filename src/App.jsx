import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import Header from "./Header.jsx"
import Employees from "./Employees.jsx"
import Characters from "./Characters.jsx"

class App extends Component {
  render() {
    return (
      <>
        <Header/>      
        <Switch>        
          <Route exact path="/Employees" component={Employees}></Route>
          <Route exact path="/Characters" component={Characters}></Route>        
        </Switch>
      </>
    )
  }
}

export default App;
