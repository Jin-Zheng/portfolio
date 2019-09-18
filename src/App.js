import React, { Component } from 'react';
import './css/App.css';
import Sidebar from './components/sidebar.jsx'
import Intro from './components/intro.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <Intro/>
                        <About/>
                        <Projects/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
