import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import gitHubJobService from './services/gitHubJobService';

function App() {  
  
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
