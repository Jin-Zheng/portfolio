import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                {/*<section className="colorlib-services" data-section="services">*/}
                {/*    <div className="colorlib-narrow-content">*/}
                {/*            <div className="row">*/}
                {/*                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"*/}
                {/*                     data-animate-effect="fadeInLeft">*/}
                {/*                    <span className="heading-meta">What I do?</span>*/}
                {/*                    <h2 className="colorlib-heading">Here are some of my expertise</h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="row">*/}
                {/*                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">*/}
                {/*                    <div className="services color-1">*/}
                {/*                        <span className="icon2"><i className="icon-globe2"></i></span>*/}
                {/*                        <h3>Web Development</h3>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">*/}
                {/*                    <div className="services color-2">*/}
                {/*                        <span className="icon2"><i className="icon-cloud4"></i></span>*/}
                {/*                        <h3>Cloud</h3>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">*/}
                {/*                    <div className="services color-4">*/}
                {/*                        <span className="icon2"><i className="icon-layout"></i></span>*/}
                {/*                        <h3>Software</h3>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">*/}
                {/*                <div className="services color-3">*/}
                {/*                    <span className="icon2"><i className="icon-data"></i></span>*/}
                {/*                    <h3>Big Data Analytics</h3>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Skills</span>
                                <h2 className="colorlib-heading animate-box">What I do?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInRight">
                                <div className="skills">
                                    <table className="table">
                                        <thead className="">
                                            <tr>
                                                <th scope="col"><h2><a>Technology</a></h2></th>
                                                <th scope="col"><h2>Tools</h2></th>
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
                                                    Databases
                                                </th>
                                                <td>IBM DB2, MySQL, MongoDB, Oracle, PostgreSQL, SQL Server</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Tools and Frameworks
                                                </th>
                                                <td>AWS Glue, Bootstrap, ExpressJS, Hadoop, IBM Websphere, NodeJS, ReactJS, Spark, Spring MVC</td>
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