import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from './Profile';
import ViewProfile from './ViewProfile';
import AddUserProfile from './AddUserProfile';
import Accordian from './Accordian'

class App extends React.Component {
  
  render() {
   return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/Accordian" />
        <Route path='/Accordian' component={Accordian} />
        <Route  path='/UserProfile' component={Profile} />
        <Route path='/ViewProfile' component={ViewProfile}/>
        <Route path='/AddUserProfile' component={AddUserProfile}/>
      </Switch>  
    </Router>
  );
  }
}

export default App;

