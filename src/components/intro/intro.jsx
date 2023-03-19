import React from 'react'
import './intro.css'
import Me from '../../img/me.png'

function intro() {
  return (
    <div className='introduction'>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro">Hello,My name is </h2>
          <h1 className='intro-name'>Akshay Neje</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Developer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Content writer</div>
            </div>
          </div>
          <p className="intro-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className='intro-image' />
      </div>
    </div>
  ) 
}

export default intro





