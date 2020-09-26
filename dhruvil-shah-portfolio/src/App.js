import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Timeline from './components/timeline'
import Contact from './components/contact'
import Education from './components/education'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap" >
         	<Sidebar style={{backgroundColor:"#1d1d24"}}></Sidebar>
				<div id="colorlib-main" >
					<Introduction></Introduction>
					<About></About>
          <Skills></Skills>
					<Timeline></Timeline>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
