import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import gitHubJobService from './services/gitHubJobService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobDetails from './components/JobDetails/JobDetails';
function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={JobDetails} />
          {/* <Route exact path='/:jobID' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
