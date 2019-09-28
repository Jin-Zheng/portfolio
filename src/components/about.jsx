import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>My name is Jin Zheng. I am a {(new Date().getFullYear()) - 1995} year old developer from Toronto, Canada.
                                                Currently I am consulting full time for <a href="https://adastracorp.com/" target="_blank" rel="noopener noreferrer">Adastra Corporation</a> providing ETL solutions and dev-ops support for the client <a href="https://www.sunlife.ca/" target="_blank">Sunlife Financial</a>.
                                                My greatest strength as a developer is my intuition and adaptability when working with new teams and varied technologies, which allows me to be a versatile developer to meet all business requirements while providing elegant solutions.
                                            </p>
                                            <p>My career interests include: </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row-pt-md">
                                    <div className="col-md-4 text-center animate-box">
                                        <div className="services color-1">
                                            <span className="icon">
                                                <i className="icon-globe2"></i>
                                            </span>
                                            <div className="desc">
                                                <h3>Web Development</h3>
                                                <p>I have a passion for frontend development and sleek web design. My favorite stack is currently <strong>MERN.</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center animate-box">
                                        <div className="services color-2">
                                            <span className="icon">
                                                <i className="icon-layout"></i>
                                            </span>
                                            <div className="desc">
                                                <h3>Software</h3>
                                                <p>I enjoy using languages such as <strong>Javascipt</strong> and <strong>Python</strong> for their versatility and popularity.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center animate-box">
                                        <div className="services color-3">
                                            <span className="icon">
                                                <i className="icon-data"></i>
                                            </span>
                                            <div className="desc">
                                                <h3>Big Data Analytics</h3>
                                                <p>At Sunlife, I developed an interest in Big Data and Cloud applications. Especially in data science and analytics.</p>
                                            </div>
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