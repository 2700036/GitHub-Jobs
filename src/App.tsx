import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobDetails from './pages/JobDetails/JobDetails';
import { useGitHubJobService } from './hooks/useGitHubJobService';
import { useSelector } from 'react-redux';
import StyledApp from './styled';
import { RootState } from './reducers/types';

function App() {
  const isThemeDark: boolean = useSelector(({ app }: RootState) => app.isThemeDark);
  const { searchJobs } = useGitHubJobService();

  useEffect(() => {
    searchJobs();
  }, []);
  return (
    <StyledApp isThemeDark={isThemeDark}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:jobID' component={JobDetails} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
