import React from 'react';
import Img from '../../assets/img-login-3.jpg';
import Form from './Form';
import './login.css';

export default function Index() {
    return (
        <div className='login'>
            <div className='login-form'>
                <Form />
            </div>

            <div className='login-img'>
                <img src={Img} alt="img-login" />
            </div>
        </div>
    );
}
