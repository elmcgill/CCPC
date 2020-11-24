import React, {useState, useEffect} from 'react';
import {animateScroll as scroll, Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import Button from '../button/Button';
import Menu from "@material-ui/icons/Menu";
import './Navbar.css';


function Navbar({toggle}) {

    const [scrollNav, setScrollNav] = useState(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
           <nav className='nav_bar'>
                <div className = 'navbar_container'>
                    <LinkR className='nav_logo' to='/' onClick={toggleHome}>
                        CCPC
                    </LinkR>
                    <div className='menu_icon' onClick={toggle}>
                        <Menu className='menu_bars' fontSize='large'/>
                    </div>
                    <ul className='nav_menu'>
                        <li className='nav_item'>
                            <LinkS className='nav_link_S' to='/products' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Prebuilts</LinkS>
                        </li>
                        <li className='nav_item'>
                            <LinkR className='nav_link_R' to='/configure'>Configure A PC</LinkR>
                        </li>
                        <li className='nav_item'>
                            <LinkR className='nav_link_R' to='/login'>Sign In</LinkR>
                        </li>
                        <li className='nav_item'>
                            <Button />
                        </li>
                    </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar
