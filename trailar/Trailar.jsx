import React from "react";
import YouTube from "react-youtube";
import './Trailar.css'
import {imageUrl} from '../contents/constants'
import Navbar from '../components/navbar/navbar'
import NetflixSign from "./NetflixSign";
// import Home from '../components/Banner/Banner'
function trailar(props) {
   const {    
    movies,
    pass,
    urlId,
   } = props
   
  return (
    <div>
    <div 
    
     className="container-mov">
      <Navbar/>
     <h1 className="main-title1">Ready to watch? SignIn to create or restart your membership.</h1>
     <h1 className="main-title2">Unlimited movies, TV shows and more.</h1> 
        <div className="movies">
           <YouTube className="trailar" videoId={props.videoId} opts={props.opts} />
           
        </div>
        
    </div>
      <NetflixSign/>
    </div>
  );
}
export default trailar;
