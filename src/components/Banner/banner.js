import React from 'react'
import "./banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie name</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'> Lorsed to demonstrate the visual form of a document or a typeface without relying on meaningful content.</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner;