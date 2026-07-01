import React from 'react';
import './App.css';
import Rail from './components/Rail';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
function App() {
  return (
    <div className="layout">
      <Rail />
      <main className="content">
        <Header />
        <Intro />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;
