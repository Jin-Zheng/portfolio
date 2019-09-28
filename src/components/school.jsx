import React, { Component } from 'react'

export default class School extends Component {
    render() {
        return (
            <div>
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
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-book2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Honours Bachelor of Science from University of Toronto <span>2013 - 2018</span></h2>
                                                <p>I obtained my degree from the <strong>University of Toronto</strong> Scarborough Campus. There I pursued a Honours Bachelors of Science, double majoring in <strong>Computer Science</strong> and <strong>Behavioral Psychology</strong>.</p>
                                                <p>I studied there from 2013 to 2018. I also completed a co-op year in 2017 at the Ontario Ministry of Education.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-book2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>High School Diploma from Pierre Elliott Trudeau High School <span>2009 - 2013</span></h2>
                                                <p>I completed my high school education from <strong>Pierre Elliott Trudeau HS</strong> in Markham Ontario.</p>
                                                <p>I studied there from 2009-2013. My major interests at the time were Computer Science, Psychology, and Investment Capital Markets</p>
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