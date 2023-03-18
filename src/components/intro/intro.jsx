import React from 'react'
import './intro.css'

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
        </div>
      </div>
      <div className="intro-right">right</div>
    </div>
  ) 
}

export default intro





