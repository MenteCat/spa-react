import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from './images/homeimg.png';
import '../css/HomeAbout.css';
import Same from './Same';


const Home=()=> {
    return(
        <>
        <Same 
        title='Cat Rescue Centre'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Molestie ac feugiat sed lectus vestibulum.'
        imgsrc={homeimg}
        btn='Read more'
        />
        </>

    )
};

export default Home;