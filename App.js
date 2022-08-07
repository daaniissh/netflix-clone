// import logo from './logo.svg';
import "./App.css";
import { origins, action } from "./urls";
import Banner from "./components/Banner/Banner";
import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { useEffect } from "react";
// import RowPost from "./components/row-poster/RowPost";

function App() {
  // const [load, setLoad] = useState(true);
  // const spinner = document.getElementById("spiner");
  // const item = localStorage.setItem('load',true);

  // useEffect(() => {
  //   if (item) {
  //     setTimeout(() => {
  //             spinner.style.display = "none";
  //             setLoad(false);
  //           }, 1000);

  //     setLoad(true);
  //   } else {
  //     setLoad(false);
  //      localStorage.setItem('load', false);
  //   }
  // }, []);



  return (
        <div className="App">
        <Navbar />
        <Banner />
      </div>
      )
  
  
}

export default App;
