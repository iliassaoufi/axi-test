import React from 'react';
import Header from '../ui/shared/Header';
import './HeroSection.css';
import Img1 from '../../assets/img-hero-1.jpg';
import Img2 from '../../assets/img-hero-2.jpg';

export default function HeroSection() {
    return (
        <div className='hero-section'>
            <Header />
            <div className='hero'>
                <div className=' hero-img hero-img-1'>
                    <img src={Img1} alt='' />
                </div>
                <div className='hero-img hero-img-2'>
                    <img src={Img2} alt='' />
                </div>
                <div className='hero-content'>
                    <h1>Collection and style for everyone</h1>
                    {/* <button className='btn-pr'>
                        Shop now
                        <i className="fas fa-shopping-bag"></i>
                    </button> */}
                </div>
            </div>
        </div>
    );
}
