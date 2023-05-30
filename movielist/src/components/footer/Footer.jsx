import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/film (1).png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movielist</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Contact us</Link>
                        <Link to="/">Terms of Use</Link>
                        <Link to="/">About Us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Help Center</Link>
                        <Link to="/">Ways to Watch</Link>
                        <Link to="/">Only on Movielist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
