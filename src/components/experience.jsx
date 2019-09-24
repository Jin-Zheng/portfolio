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

                                            <div className="timeline-icon color-1">
                                                <i className="icon-data"></i>
                                            </div>

                                            <div className="timeline-label">
                                                <h2><a href="#">Data Warehousing Consultant at Adastra Corp.</a> <span>Jul 2018 - Present</span></h2>
                                                <p>
                                                    <ul>
                                                        <li>ETL Consultant providing data warehousing solutions using technology such as <strong>Sqoop</strong>, <strong>Hive</strong>, <strong>Hadoop</strong>, and <strong>AWS Glue</strong>. Currently working with the client <i>Sunlife Financial</i>.</li>
                                                        <li>Successfully implemented several ETL workflows for Sunlife’s projects CS Analytics, CHESS, Global, and IFRS17 using software such as <strong>Informatica Powercenter</strong>, <strong>Apache Zeppelin</strong> and <strong>PySpark</strong>.</li>
                                                        <li>Currently working as a production support analyst providing development and production support on several projects including many of the ones I’ve developed ETLs for.</li>
                                                        <li>Smoothly transitioned between 4 unique teams within Sunlife that use vastly different technologies and workflow practices. Successfully collaborated with team members to transition between projects easily.</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </article>


                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-globe2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="#">Application Analyst at Ontario Ministry of Education</a> <span>May 2016 - Sep 2017</span></h2>
                                                <p>
                                                    <ul>
                                                        <li>Full stack development for <i>OSAP (Ontario Student Assistance Program)</i> team in an Agile environment utilizing the LAMP stack; <strong>Spring MVC Framework</strong>, <strong>IBM Websphere</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, and <strong>Oracle SQL frameworks</strong>.</li>
                                                        <li>Created web pages and web modules for OSAP slated for 2018, 2019, and 2020 release as well as resolving defect tickets related these projects.</li>
                                                        <li>Introduced Selenium as a new testing solution to the OSAP QA and development team and provided expertise and guidance in it’s usage.</li>
                                                        <li>Created testing suites using <strong>Selenium</strong> in order to perform automation testing on new and existing modules.</li>
                                                        <li>Spent 3 months QA testing before joining the development team during which I carefully tested the OSAP application and logged well documented defects for the development team.</li>
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