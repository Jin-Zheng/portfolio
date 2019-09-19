import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi! <br/>I'm Jin</h1>
                                                    <h2>Welcome to my portfolio<br/>Download my resume to get a better look</h2>
                                                    <p><a className="btn btn-primary btn-learn">Download Resume <i
                                                        className="icon-download4"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I am <br/>a Developer</h1>
                                                    <h2>Take a look at some of my work</h2>
                                                    <p><a href="https://github.com/Jin-Zheng" className="btn btn-primary btn-learn">View Github <i
                                                        className="icon-github"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

