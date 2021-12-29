import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from './images/homeimg.png';
import '../css/HomeAbout.css';
import Same from './Same';


const Home=()=> {
    return(
        <>
        <Same 
        title='She sights a Bird, she chuckles'
        text='She sights a Bird, she chuckles
        She flattens then she crawls
        She runs without the look of feet
        Her eyes increase to Balls …'
        imgsrc={homeimg}
        btn='Read more'
        />
        </>

    )
};

export default Home;