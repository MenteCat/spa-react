import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from './images/img1.png';
import Same from './Same';

const About=()=> {
    return(
        <>
        <Same
            title='A Cat'
            text='She had a name among the children;
            But no one loved though someone owned
            Her, locked her out of doors at bedtime
            And had her kittens duly drowned.
            In Spring, nevertheless, this cat
            Ate blackbirds, thrushes, nightingales,
            And birds of bright voice and plume and flight,
            As well as scraps from neighbours’ pails …'
            imgsrc={img1}
            btn='Read more'
        />
        </>

    )
};

export default About;