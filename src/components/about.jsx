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
                                            <p><strong>Under Construction</strong> </p>
                                            <p>Some stuff about me</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-globe2"></i></span>
                                            <h3>Web Developer</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2"><i className="icon-stack2"></i></span>
                                            <h3>Full Stack</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2"><i className="icon-data"></i></span>
                                            <h3>Big Data</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2"><i className="icon-layout"></i></span>
                                            <h3>Software</h3>
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