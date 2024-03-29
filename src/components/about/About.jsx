import React from 'react'
import './about.css'
import Award from '../../img/award.png'

function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className='about-img'
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="about-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="about-award">
                    <img src={Award} alt="" className='about-award-img' />
                    <div className="about-award-text">
                        <h4 className="about-award-title">International Design Awards 2021</h4>
                        <p className="about-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About