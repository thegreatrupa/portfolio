import React from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
