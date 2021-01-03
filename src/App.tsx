import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import gitHubJobService from './services/gitHubJobService';

function App() {  

  useEffect(() => {
    gitHubJobService.getJobs({description: '++++'})
    .then((jobs) => {
      console.log(jobs)
    })
    
  }, [])
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
