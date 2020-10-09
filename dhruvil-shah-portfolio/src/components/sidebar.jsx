import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Dns.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Dhruvil Shah</a></h1>
              <p style={{paddingLeft:"10px"}}>Full Stack Developer | Cloud Development | MERN Stack | AWS | Masters in Information Systems from Northeastern University</p>
            </div>
            <br></br>
            
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/shahdhruvil29/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/dhruvil_shah7/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhruvil-shah75/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/dhruvil7665" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
             
              </ul>
            </nav>
            <div className="colorlib-footer">
            <p><small>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> 2020  All rights reserved</small></p>
                  
             
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
