import React, {useState} from 'react';
import {Link as LinkR} from 'react-router-dom';
import {animateScroll as scroll, Link as LinkS} from 'react-scroll';
import './Navbar.css';
import Button from '../button/Button';
import Close from '@material-ui/icons/Close';
import Menu from "@material-ui/icons/Menu";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <>
            <nav className='navbar'>
                <LinkS to='/' className='navbar-logo' onClick={toggleHome}>CCPC</LinkS>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <Close className='close-icon' fontSize={'large'}/> : <Menu className='menu' fontSize={'large'}/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' >
                         <LinkS to='products' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                             Products
                         </LinkS>
                    </li>
                    <li className='nav-item'>
                        <LinkS to='about' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About Us
                        </LinkS>
                    </li>
                    <li className='nav-item'>
                        <LinkR to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                            Sign In
                        </LinkR>
                    </li>
                    <li className='nav-item'>
                        <LinkR to='/checkout' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Checkout
                        </LinkR>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;