import React from 'react';
import './About.css';

import img1 from '../../imgs/about-us-1.jpg';
import img2 from '../../imgs/about-us-2.jpg';
import img3 from '../../imgs/about-us-3.jpg';

const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function About() {
    return (
        <div className='about'>
            <div className="container"> 
                <div className='section-container'>
                    <img src={img1} alt='about-us-pic' className='section-img'/>
                        <div className='section-text'>
                            <h1>About Us</h1>
                            <div className='p-center'>
                                <p>{body}</p>
                            </div>
                    </div>
                </div>
                <div className='section-container'>
                    <div className='section-text'>
                        <h1>Our Goals</h1>
                        <div className='p-center'>
                            <p>{body}</p>
                        </div>
                    </div>
                    <img src={img2} alt='about-us-pic' className='section-img'/>
                </div>
                <div className='section-container'>
                    <img src={img3} alt='about-us-pic' className='section-img'/>
                        <div className='section-text'>
                            <h1>Our Commitment</h1>
                            <div className='p-center'>
                                <p>{body}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
