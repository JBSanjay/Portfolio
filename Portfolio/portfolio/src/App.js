import React from 'react';
import Intro from './components/Intro/Intro';
import Content from './components/Content/Content';
import Edu from './components/Edu/Edu'
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Intro/>
      <Content/>
      <Edu/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
