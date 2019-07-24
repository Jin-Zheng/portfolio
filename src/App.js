import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
      <div>
        <CssBaseline />
        <NavBar/>
        <Home/>
        <Footer/>
      </div>
  );
}

export default App;
