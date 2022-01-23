import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='footer-about'>
                    <div className='logo'>
                        AXI Store<span>.</span>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                    </div>
                </div>
                <div className='footer-subscribe'>

                    <form>
                        <div className='input-with-icon'>
                            <i className="fas fa-envelope"></i>
                            <input type='email' placeholder='Your Email' />
                        </div>

                        <button className='btn-pr' type='button' >subscribe</button>
                    </form>
                </div>
            </div>
            <div className='footer-nav'>

                <Link to='/'>Home</Link>
                <Link to='/'>Products</Link>
                <Link to='/'>About</Link>
                <Link to='/'>contact</Link>
                <Link to='/'>login</Link>
            </div>

        </div>
    );
}

