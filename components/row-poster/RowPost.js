// import React from 'react'
// import PosterImg from './PosterImg'
import Youtube from "react-youtube";
import "./RowPost.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "../axios";
import { API_KEY, imageUrl } from "../../contents/constants";
import YouTube from "react-youtube";
import Trailar from "../../trailar/Trailar";
function RowPost(props) {
  const { movie } = props;
  const [movies, setMovies] = useState([]);
  const [urlId, setId] = useState("");
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data);
      })
      .catch((err) => {
        // alert("setta error⚠")
      });
  }, []);
  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:1 ,
    },
  };
  const handleMovie = (id) => {
    // console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results[id]);
        if (res.data.results.length !== 0) {
          // setPass(id);
          setId(res.data.results[0]);
        }
      });
  };
  const hover = () =>{
    // alert('dd')
    setShow(true);
  }
  const hoverLeave = () =>{
    // alert('eee')
    setShow(false);
  }
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <div 
        
      className="posters">
        {movies.map((obj) => (
          <img
            title="Click and Watch Trailar"
            onMouseEnter={hover}
            onMouseLeave={hoverLeave}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          />

      
        ))}
         
      </div>
  
      {urlId && (
        <Trailar
          movies={movies}
          // id={pass}
          url={urlId}
          videoId={urlId.key}
          opts={opts}
        />
      )}
    </div>
  );
}

export default RowPost;
