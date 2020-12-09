import React from 'react';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Footer.css';

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const formSubmit = (e) => {
        e.preventDefault();

        //Do this stuff when we actually have a mailing list
    }

    return (
        <div className="footer">
            <LinkS to='slider' className='footer-logo' onClick={toggleHome}>CCPC</LinkS>
            <div className="footer-links">
                <div className="footer-row">
                    <LinkR className="footer-header" to="/account">Account</LinkR>
                    <ul className="footer-col">
                        <li className="footer-item">
                            <LinkR className="footer-link" to="/login">Login</LinkR>
                        </li>
                        <li className="footer-item">
                            <LinkR className="footer-link" to="/cart">Cart</LinkR>
                        </li>
                        <li className="footer-item">
                            <LinkR className="footer-link" to="/account/orders">Track Order</LinkR>
                        </li>
                        <li className="footer-item">
                            <LinkR className="footer-link" to="/pwreset">Reset Password</LinkR>
                        </li>
                    </ul>
                </div>
                <div className="footer-row">
                    <LinkR className="footer-header" to="/contact">Contact Us</LinkR>
                    <ul className="footer-col">
                        <li className="footer-item">
                            <p className="footer-contact">email@email.com</p>
                        </li>
                        <li className="footer-item">
                            <p className="footer-contact">Street Address</p>
                        </li>
                        <li className="footer-item">
                            <p className="footer-contact">City, State, Zip</p>
                        </li>
                        <li className="footer-item">
                            <p className="footer-contact">United States</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-row">
                    <LinkR className="footer-header" to='/social'>Stay Updated</LinkR>
                    <ul className="footer-col">
                        <li className="footer-item">
                             <a className="foot-social" href="https://www.twitter.com">
                                <TwitterIcon style={{fill: '#00ACEE'}}/>
                                <p className="footer-social-p">Twitter</p>
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="foot-social" href="https://www.facebook.com">
                                <FacebookIcon style={{fill: '#3B5998'}}/>
                                <p className="footer-social-p">Facebook</p>
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="foot-social" href="https://www.youtube.com">
                                <YouTubeIcon style={{fill: '#FF0000'}}/>
                                <p className="footer-social-p">Youtube</p>
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="foot-social" href="https://www.instagram.com">
                                <InstagramIcon style={{fill: '#f7f5fb'}}/>
                                <p className="footer-social-p">Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-mail-list">
                <h3>Join Our Mailing List</h3>
                <form className="footer-form" onSubmit={formSubmit}>
                    <input className="footer-input" type="email" placeholder="email"/>
                    <button className="footer-submit" type="submit"><ArrowForwardIosIcon/></button> 
                </form>
            </div>
            <div className="footer-notices">
                <p className="footer-notice"><LinkR to="/tos" className="footer-notice-link">Terms of Service</LinkR> & <LinkR to="/privacy" className="footer-notice-link">Privacy</LinkR></p>
                <p className="footer-notice">2020 CCPC ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer;
