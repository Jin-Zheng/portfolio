import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Experience</span>
                                <h2 className="colorlib-heading animate-box">Where I've Worked</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-data"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Data Warehousing Consultant at Adastra Corp. <span>Jul 2018 - Present</span></h2>
                                                <p>
                                                    <strong>Contracted to Sunlife Financial - ETL Developer and Operations Support</strong>
                                                    <ul>
                                                        <li>I have worked on 4 projects within the Delivery team: CS Analytics, CHESS, Global, IFRS17.</li>
                                                        <li>My responsibilities included developing and testing ETL workflows using Informatica for the Hadoop data lake.</li>
                                                        <li>I also prototyped Spark ETL workflows for a transitioning project which used AWS cloud warehousing rather than Hadoop.</li>
                                                        <li>I am currently on the operations support team. Supporting Hadoop projects with production issues and operational problems.</li>
                                                        <li><strong>Technology Utilized:</strong> Informatica Powercenter, Informatica BDE, Apache Zeppelin, Pyspark, Hadoop, Hive, AWS Glue, SQLServer, Oracle DB2, Sunlife Mainframe</li>
                                                    </ul>
                                                    <strong>Prototyping for Internal SAAS Project - Intelligent Credit</strong>
                                                    <ul>
                                                        <li>I was the dedicated frontend developer of the prototype, building out the dashboard and web hooks using ReactJS.</li>
                                                        <li>I designed the data model with my colleagues using free online data modeling tools. We took extra care to normalize our data models to BCNF.</li>
                                                        <li>I presented the prototype to CEO Darren Edery and VP Alex Cotonat as the frontend consult.</li>
                                                        <li><strong>Technology Utilized:</strong> ReactJS, NodeJS, ExpressJS, MySQL, Javascript, CSS and Bootstrap, HTML</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-globe2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Application Analyst at Ontario Ministry of Education <span>May 2016 - Sep 2017</span></h2>
                                                <p>
                                                    <strong>Full Stack Developer - OSAP Admin Facing Application</strong>
                                                    <ul>
                                                        <li>I was responsible for developing new views for the OSAP 2017-2018 and 2018-2019 applications as per new business requirements.</li>
                                                        <li>I also analyzed and resolved defect tickets logged by the QA team in regards to the student facing and admin facing applications.</li>
                                                        <li>I introduced Selenium as a automation testing suite to the team in order to streamline the testing of an OSAP application's lifecycle.</li>
                                                        <li><strong>Technology Utilized:</strong> Javascript and JQuery, HTML, CSS, Oracle SQL, Spring MVC, IBM Websphere, Selenium</li>
                                                    </ul>
                                                    <strong>QA Analyst - OSAP Admin Facing Application</strong>
                                                    <ul>
                                                        <li>My responsibilities were to take test cases provided to me and run the procedure to ensure proper function.</li>
                                                        <li>I was responsible for logging dozens of defects and providing the exact procedure to replicate for a developer to fix.</li>
                                                        <li><strong>Technology Utilized:</strong> Selenium</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box"
                                             data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
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