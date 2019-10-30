import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer'
import Navbar from './Components/Navbar'


function App() {


  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-lg-12"><br/></div>
        </div>
        <div className="row text-center">
          <div className="col col-lg-3"></div>
          <div className="col col-lg-6 shadow p-3 mb-5 rounded darken ">
            <header className="App-header">
              <img src={selectImage()} className="App-logo" alt="logo" />
              <br/>
              <span><Timer /></span>
            </header>
            <div className="col col-lg-3"></div>
          </div>
          <div className="row"></div>

        </div>


      </div>



    </div>
  );
}
function selectImage() {
  const min = 1;
  const max = 2;
  const rand = Math.floor(Math.random() * max) + min;
  switch(rand){
    case(1):
      return '/HeaderImages/sato.gif';
    case(2):
      return './mag.jpg';
    default:
        return './sato.gif';
  }
  
}

export default App;
