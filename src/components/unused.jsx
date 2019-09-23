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

                    </div>
                </div>
            </div>
        )
    }
}