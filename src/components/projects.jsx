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
                                <div className="project" style={{backgroundImage: 'url(images/intelligentcredit.png)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Intelligent Credit</a></h3>
                                            <span>Credit risk application developed for simplifying B2B, B2C, and C2C credit lending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{backgroundImage: 'url(images/metrognome.PNG)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Metro-Gnome</a></h3>
                                            <span>Beat maker application for amateur musicians and creatives alike</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{backgroundImage: 'url(images/lambdaworks.PNG)'}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Lambda-Works</a></h3>
                                            <span>Quiz and Test taker application developed for the University of Toronto</span>
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