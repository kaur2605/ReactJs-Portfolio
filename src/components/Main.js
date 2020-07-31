import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Resume from './Resume';
import Home from './Home';
import Contact from './Contact';
import Project from './Project';


export default function Main() {
 return (
  <Switch>
   <Route path="/resume" component={Resume}></Route>
   <Route exact path="/" component={Home}></Route>
   <Route path="/contact" component={Contact}></Route>
   <Route path="/project" component={Project}></Route>


  </Switch>
 )
}
