import './App.css';
import React, { useEffect } from 'react';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/Home/Home.js"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WebFont from "webfontloader"

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [ 'Roboto','Droid Sans', 'Chilanka'] 
      }
    });
  }, []);
  return (
    <Router>

      <Header/>
      <Routes>

      <Route exact path='/' Component={Home}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
