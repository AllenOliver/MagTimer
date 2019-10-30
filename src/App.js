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
          <div className="col col-lg-12"><br /></div>
        </div>
        <div className="row text-center">
          <div className="col col-lg-3"></div>
          <div className="col col-lg-6 shadow p-3 mb-5 rounded darken ">
            <header className="App-header">
              <img src={selectImage()} className="App-logo" alt="logo" />
              <br />
              <span>
                <Timer />
              </span>
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
  switch (rand) {
    case (1):
      return 'https://www.pioneer2.net/community/data/xengallery/1/1750-1c365f58189e1039ab9db72e8973d09c.jpg';
    case (2):
      return 'https://66.media.tumblr.com/5953ca79eca567b573f94c3abdf4b7c8/tumblr_oefv6iCtz61v6pzwto1_400.gifv';
    default:
      return 'https://www.pioneer2.net/community/data/xengallery/1/1750-1c365f58189e1039ab9db72e8973d09c.jpg';
  }

}

export default App;
