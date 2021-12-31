import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ContactStyle.css';
const Contact=()=> {
    return(
        <>
        <h1>Contact us</h1>
        <form className='contact'>
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" placeholder='Enter your name'></input>
        </div>
        <div>
            <label htmlFor='name'>Email</label>
            <input type="email" placeholder='Enter your email'></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Enter your password'></input>
        </div>
        <div>
            <label htmlFor='mobile'>Mobile</label>
            <input type="mobile" placeholder='Enter your mobile number'></input>
        </div>
        <div className='btnBox'>
                    <div className='btn'>
                    <NavLink to='/' className='readMore'
                    >Submit Details</NavLink>
                    </div>
        </div>
        </form>
        </>

    )
};

export default Contact;