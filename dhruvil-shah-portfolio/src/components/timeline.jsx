import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Customer Experience Technician (Part-time) at Northeastern University  <span>2019-present </span></h2>
                        <p>Technologies and Tools used: HTML5, JavaScript, CSS3, ServiceNow, Papercut
<ul>
  
<li>Co-developed a web application based on renting electronic appliances like laptops to students and faculty with live monitoring and integration
with the Northeastern financial services department</li>
<li>Collaborated with Customer experience team for providing 24/7 support and troubleshooting technical issues faced by students and faculty</li></ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Analyst at BNP Paribas <span>2018-2019</span></h2>
                        <p>Technologies used: Python, Java, J2EE, Oracle, Corba, Jenkins, Maven, XML, JSON
<ul>
  
<li>Collaborated withthe core User Acceptance Testing andAnalysis team for the Electronic Market AccessProject</li>
<li>Performed Technical and Functional Validations of order routing system and other trading tools utilized by clients globally</li>
<li>Migrated the order routing system application for more than 45 US, European and Asia Pacific simulation markets for Mifid-2 regulation</li>
<li>Coordinated with Business Analyst Team, Application Production Support Team and other team members from across US, Europe and AsiaPacific
region and validated Jira’s resolved by development teams based in Paris and Hong Kong from time to time</li>

</ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Software Analyst at BNP Paribas <span>2017-2018</span></h2>
                        <p>Technologies used: Python (Pandas, Numpy and other libraries), Django and MySQL
<ul>
  
<li>Designed an automated test suite as a part of innovation project, using Python programming that pumps automated orders on test environment of
multiple exchanges via an order routing system and generates a detailed and precise report for Error handling and Data analysis</li>
<li>Saved more than 41 Man days a year and as a recognition to the work, was entrusted with an opportunity to lead a project</li>
<li>Participated and aware of all sorts of agile ceremonies (user story grooming, sprint planning, sprint retrospective) and organized sprint meetings</li>


</ul></p>
                      </div>
                    </div>
                  </article>
                 

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Android Developer Intern at Purple Squirrel Eduventures <span>2015-2016</span></h2>
                        <p><ul><li>Developed an Android application using Android studio that synced data with a centrally located server and published information regarding upcoming events, workshops and industrial visits organized by the company.</li></ul></p>
                      </div>
                    </div>
                  </article>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
