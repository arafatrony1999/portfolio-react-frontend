import React, { Component, Fragment } from 'react';
import logo from '../assets/images/logo.png';
import logoCircle from '../assets/images/logos-circle.png';
import '../assets/css/header.css';
import '../assets/css/intro.css';
import '../assets/css/feature.css';
import '../assets/css/portfolio.css';
import '../assets/css/contact.css';
import '../assets/css/popular.css';
import '../assets/css/resume.css';
import '../assets/css/aos.css';
import '../assets/css/pricing.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            document.querySelector("#menu-bar").classList.toggle("stickeyy", window.scrollY > 20)
        });



        $('.burger-bar').on('click',function(){
            $('.all-nav-links').toggleClass('make-visible');
            // $('.nav-links').toggleClass('nav-links-overlay');
        });
        $('.cross-bar').on('click',function(){
            $('.all-nav-links').toggleClass('make-visible');
            // $('.nav-links').toggleClass('nav-links-overlay');
        });
    }
    render() {
        return (
            <Fragment>
                <section>
                    <div id='menu-bar' className="main-header">
                        <div className="main-header-left">
                            <img src={logo} alt="My Logo" />
                        </div>
                        <div className="main-header-right">

                            <div className="burger-bar">
                                <i className="fas fa-bars"></i>
                            </div>

                            <div className="all-nav-links">
                                <div className="nav-links">
                                    <div className="responsive-header">
                                        <div className="responsive-menu-header">
                                            <img src={logoCircle} alt=""></img>
                                            <div className="cross-bar">
                                                <i className="fas fa-times"></i>
                                            </div>
                                        </div>
                                        <div className="responsive-menu-author">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <NavLink to="/" className="active-link">HOME</NavLink>
                                    <NavLink to="/#features">FEATURES</NavLink>
                                    <NavLink to="/">PORTFOLIO</NavLink>
                                    <NavLink to="/">RESUME</NavLink>
                                    <NavLink to="/">CLIENTS</NavLink>
                                    <NavLink to="/">PRICING</NavLink>
                                    <NavLink to="/">BLOG</NavLink>
                                    <NavLink to="/">CONTACT</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Header;
