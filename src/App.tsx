import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import gitHubJobService from './services/gitHubJobService';

function App() {  
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    gitHubJobService.getJobs({description: '++++'})
    .then((res): void => {
      if(typeof res === 'object') setJobs(res)
      console.log(jobs)
    })
    
  }, [])
  return (
    <div className="App">
      <Header />
      <Home jobs={jobs}/>
    </div>
  );
}

export default App;
