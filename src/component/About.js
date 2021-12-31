import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from './images/img1.png';
import Same from './Same';

const About=()=> {
    return(
        <>
        <Same
            title='Know more about us'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Molestie ac feugiat sed lectus vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Molestie ac feugiat sed lectus vestibulum.'
            imgsrc={img1}
            btn='Know more'
        />
        </>

    )
};

export default About;