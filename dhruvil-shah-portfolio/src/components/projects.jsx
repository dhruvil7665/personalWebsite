import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/event.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Eve Tracker</a></h3>
											<span>Event Tracking Website built using React JS</span>
											<p className="icon">
												
												<span><a href="https://github.com/dhruvil7665/EveTracker"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Holiday.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Holiday Maker</a></h3>
											<span>Travel Website built using Spring MVC and Hibernate</span>
											<p className="icon">
											
												<span><a href="https://github.com/dhruvil7665/HolidayMaker"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/react.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">World Of React</a></h3>
											<span>Technology Blog developed using React JS, Redux, Node JS</span>
											<p className="icon">
												
												<span><a href="https://github.com/dhruvil7665/worldOfReact"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/BigData.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">BigData Analysis on Airbnb Dataset</a></h3>
											<span>Data Analysis using Apache Hadoop, Pig, Hive, Spark, MapReduce</span>
											<p className="icon">
												
												<span><a href="https://github.com/dhruvil7665/Airbnb_BigDataAnalysis"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/neuRentals.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Neu Rentals</a></h3>
											<span>Rental Website built using Angular, Node JS, Express JS and MongoDB</span>
											<p className="icon">
												
												<span><a href="https://github.com/dhruvil7665/NeuRentals"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/todo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Todo App</a></h3>
											<span>Notes based web application using Angular, Node JS, Express JS and MongoDb</span>
											<p className="icon">
												
												<span><a href="https://github.com/dhruvil7665/WebDevelopement/tree/master/TodoApplication-Angular"><i className="icon-eye" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</section>
      </div>
    )
  }
}
