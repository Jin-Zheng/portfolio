import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="work">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Projects</span>
                                <h2 className="colorlib-heading animate-box">Recent Work</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{backgroundImage: 'url(images/intelligentCreditMockup.jpg)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Intelligent Credit</a></h3>
                                            <span>Prototype for a B2C and C2C credit lending and risk assessment service that is being upstarted at Adastra with data supplied by Equifax.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{backgroundImage: 'url(images/metrognomeMockup.png)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Metro-Gnome</a></h3>
                                            <span>Highly customizable music production app designed for amateur artists to create and share their music with others.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{backgroundImage: 'url(images/lambdaWorksMockup.jpg)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Lambda-Works</a></h3>
                                            <span>Prototype quiz taking app developed for the University of Toronto to be used for a year one statistics course.</span>
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