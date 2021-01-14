import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import gitHubJobService from './services/gitHubJobService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobDetails from './components/JobDetails/JobDetails';
import { useGitHubJobService } from './hooks/useGitHubJobService';
function App() {
  const {searchJobs} = useGitHubJobService();
  useEffect(() => {
    searchJobs();
  }, []);
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:jobID' component={JobDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
