import React, { Component } from 'react'

export default class Unused extends Component {
    render() {
        return (
            <div>
                {/*Scrolling background with stat counters*/}
                <div id="colorlib-counter" className="colorlib-counters"
                     style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="309"
                                      data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Cups of coffee</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="356"
                                      data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Projects</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="30"
                                      data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Clients</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="10"
                                      data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Contact form*/}
                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                     data-animate-effect="fadeInRight">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                                                <textarea name="" id="message" cols="30" rows="7"
                                                          className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-send-message"
                                   value="Send Message"/>
                        </div>
                    </form>
                </div>
                {/*Progress bars*/}
                <div className="col-md-7 col-md-push-1">
                    <div className="row">
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Photoshop</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>jQuery</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>WordPress</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SEO</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Small box component with title*/}
                <section className="colorlib-services" data-section="services">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                <div className="services color-1">
                                    <span className="icon2"><i className="icon-globe2"></i></span>
                                    <h3>Web Development</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div className="services color-2">
                                    <span className="icon2"><i className="icon-cloud4"></i></span>
                                    <h3>Cloud</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                <div className="services color-4">
                                    <span className="icon2"><i className="icon-layout"></i></span>
                                    <h3>Software</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                <div className="services color-3">
                                    <span className="icon2"><i className="icon-data"></i></span>
                                    <h3>Big Data Analytics</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Dropdown info displays*/}
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Where I Studied</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist"
                                         aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                                       aria-controls="collapseOne">Honours Bachelor of Science Degree
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>I obtained my degree from the <strong>University of
                                                        Toronto</strong> Scarborough Campus. There I pursued a Honours
                                                        Bachelors of Science, double majoring in <strong>Computer
                                                            Science</strong> and <strong>Behavioral Psychology</strong>.
                                                    </p>
                                                    <p>I studied there from 2013 to 2018. I also completed a co-op year
                                                        in 2017 at the Ontario Ministry of Education.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">High School
                                                        Secondary Education
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>I completed my high school education from <strong>Pierre Elliott
                                                        Trudeau HS</strong> in Markham Ontario.</p>
                                                    <p>I studied there from 2009-2013. My major interests at the time
                                                        were Computer Science, Psychology, and Investment Capital
                                                        Markets</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Project boxes*/}
                <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                    <div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="work.html">Work 04</a></h3>
                                <span>Application</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                    <div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="work.html">Work 05</a></h3>
                                <span>Graphic, Logo</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                    <div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="work.html">Work 06</a></h3>
                                <span>Web Design</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Expand button*/}
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i
                            className="icon-reload"></i></a></p>
                    </div>
                </div>

                {/*Table*/}
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

        )
    }
}