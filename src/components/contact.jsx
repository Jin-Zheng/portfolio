import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Contact</span>
                                <h2 className="colorlib-heading">Get in Touch</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="colorlib-feature colorlib-feature-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-globe-outline"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <h3><a href="mailto:jinzheng.business@gmail.com">jinzheng.business@gmail.com</a></h3>
                                    </div>
                                </div>

                                <div className="colorlib-feature colorlib-feature-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-map"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <h3>15 Roehampton Ave, Suite 1306 Toronto ON M4P 1P9</h3>
                                    </div>
                                </div>

                                <div className="colorlib-feature colorlib-feature-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-phone"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <h3><a href="tel:+1416-890-9185">+1-416-890-9185</a></h3>
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