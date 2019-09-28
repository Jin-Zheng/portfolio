import React, { Component } from 'react'

export default class Unused extends Component {
    render() {
        return (
            <div>
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
                <div className="col-md-7 col-md-push-1">
                    <div className="row">
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
            </div>
        )
    }
}