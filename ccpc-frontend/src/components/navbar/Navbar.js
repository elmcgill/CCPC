import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../dropdown/Dropdown';
import {Button} from '../button/Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    }

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>CCPC</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                         <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                             Prebuilts
                         </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Configure
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/checkout' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Checkout
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;