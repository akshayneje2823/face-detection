import React from 'react'
import './intro.css'

function intro() {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-left-wrapper"> 
          <h2 className="intro-i">Hello,My name is </h2>
          <h1 className='intro-name'>Akshay Neje</h1>
          <div className="intro-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Developer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Content writer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">right</div>
    </div>
  )
}

export default intro





