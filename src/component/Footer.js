import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../css/FooterStyle.css';

const Footer=()=> {
    return(
        <>
        <footer>
            <div className='container container-flex'>
                <div className='icons'>
                    <InstagramIcon className='icon'/>
                    <FacebookIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                </div>

                <div className='copyright'>
                    <p>All rights reserved &copy;</p>
                    <p>Made with love by MenteCat</p>
                </div>

            </div>
        </footer>
        </>

    )
};

export default Footer;
