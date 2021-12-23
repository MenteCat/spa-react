import React from 'react';
import { NavLink } from 'react-router-dom';

const Home=()=> {
    return(
        <>
        <div className='mainSection'>
            <div className='contentBox'>
                <h1>She sights a Bird, she chuckles</h1>
                <p>
                She sights a Bird, she chuckles <br></br>
                She flattens then she crawls <br></br>
                She runs without the look of feet <br></br>
                Her eyes increase to Balls … <br></br>
                </p>
                <div className='btnBox'>
                    <div className='btn'>
                    <NavLink to='/about' className='readMore'
                    >Read More</NavLink>
                    </div>
                </div>



            </div>

        </div>
        </>

    )
};

export default Home;