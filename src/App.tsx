import React from 'react';
import './App.css';
import Header from './components/Header';
import colors from './constants/colors';
import Home from './pages/Home';

function App() {
  console.log(colors);
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
