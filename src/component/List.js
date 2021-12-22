import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ListStyle.css';
import cat_logo from './images/cat_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';


const List=()=> {
    return(
        <>
        <header>
            <div className='container container-flex'>
                <div className='logoContainer'> {/* first child */}
                    <img src={cat_logo} alt='logo' className='logo' />
                </div>

                <nav>
                    <div className='list'> {/* second child */}
                        <NavLink exact to='/' className='listItem'
                         activeClassName='activeItem'>Home</NavLink>
                        <NavLink to='/about' className='listItem'
                         activeClassName='activeItem'>About</NavLink>
                        <NavLink to='/services' className='listItem'
                         activeClassName='activeItem'>Services</NavLink>
                        <NavLink to='/contact' className='listItem'
                         activeClassName='activeItem'>Contact</NavLink>
                        <NavLink to='/policy' className='listItem'
                         activeClassName='activeItem'>Policy</NavLink>

                    </div>
                </nav>

                <div className='icons'> {/* third child */}
                    <SearchIcon className='icon' />
                    <PersonIcon  className='icon' />
                    <PhoneIcon className='icon' />
                </div>

            </div>

        </header>
        </>

    )
};

export default List;