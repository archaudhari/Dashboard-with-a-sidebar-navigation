import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';
import Description from './components/Description';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/settings" component={Settings} />
        </Switch>
        <Description />
      </div>
    </Router>
  );
}

export default App;
