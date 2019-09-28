import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Skills</span>
                                <h2 className="colorlib-heading animate-box">What I've Worked With</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInRight">
                                <div className="skills">
                                    <table className="table">
                                        <thead className="">
                                            <tr>
                                                <th scope="col"><h2><a>Technology</a></h2></th>
                                                <th scope="col"><h2><a>Tools</a></h2></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    Languages
                                                </th>
                                                <td>Bash, CSS, HTML, JavaScript/JQuery, Java, Python, SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Tools and Frameworks
                                                </th>
                                                <td>AWS Glue, Hadoop, Hive, Informatica, Spark, Bootstrap, Material-UI, IBM Websphere, Spring MVC, ExpressJS, NodeJS, ReactJS</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Databases
                                                </th>
                                                <td>IBM DB2, MySQL, MongoDB, Oracle, PostgreSQL, SQL Server</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Testing
                                                </th>
                                                <td>JUnit, Pytest, Selenium</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Methodologies
                                                </th>
                                                <td>Agile, Waterfall</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Non-Technical
                                                </th>
                                                <td>Adaptability, Communication, Intuition, Leadership, Team Player</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}