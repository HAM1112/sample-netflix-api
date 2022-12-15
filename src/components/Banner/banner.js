import React, { useState } from 'react'
import axios from '../../axios'
import { useEffect } from 'react';
import { API_KEY , imageUrl } from '../../constansts/constants';
import "./banner.css"


function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results[Math.floor(Math.random() * 19) + 1])
      //setMovie(response.data.results[0])
    })
  }, []);
  return (
    <div 
    style={{backgroundImage: `url(${movie? imageUrl + movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? (movie.title ? movie.title : movie.name) : " " }</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'> {movie ? movie.overview : " "} </h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner;