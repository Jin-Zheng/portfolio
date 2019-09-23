import React, { Component } from 'react';
import './css/App.css';
import Sidebar from './components/sidebar.jsx'
import Intro from './components/intro.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import Experience from './components/experience.jsx'
import School from './components/school.jsx'
import Contact from './components/contact.jsx'

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <Intro/>
                        <About/>
                        {/*<Skills/>*/}
                        <School/>
                        {/*<Experience/>*/}
                        {/*<Projects/>*/}
                        <Contact/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
