import React, { Component, Fragment } from 'react';
import face from '../assets/images/face.png';
// import Typed from 'react-typed';
import {NavLink} from 'react-router-dom';
import TypeAnimation from 'react-type-animation';

class Intro extends Component {
    render() {
        return (
            <Fragment>
                <section data-aos="fade-up">
                    <div className="intro-div">
                        <div className="intro-left">
                            <div className="welcome-text">
                                <p>WELCOME TO MY WORLD</p>
                            </div>
                            <div className="before-typed">
                                <h1>Hi, I'm <span className="my-name">Arafat Rony</span></h1>
                            </div>
                            <div className="main-typed">
                                {/* <Typed strings={[
                                    'a Full Stack Developer',
                                    'a Front End developer',
                                    'a Back-End developer']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop >
                                        <h1> </h1>
                                </Typed> */}
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        'a Professional',
                                        2000,
                                        'a backend developer',
                                        2000,
                                        'a frontend developer',
                                        2000
                                    ]}
                                    wrapper="h1"
                                    repeat={Infinity}
                                />
                            </div>
                            <div className="show-my-details">
                                <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                            </div>

                            <div className="my-links-section">
                                <div className="my-link-left">
                                    <p>FIND ME IN :</p>
                                    <div className="find-links">
                                        <NavLink to="/">
                                            <i className="fab fa-facebook-f"></i>
                                        </NavLink>
                                        <NavLink to="/">
                                            <i className="fab fa-facebook-messenger"></i>
                                        </NavLink>
                                        <NavLink to="/">
                                            <i className="fab fa-whatsapp"></i>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="my-link-right">
                                    <p>BEST SKILL ON</p>
                                    <div className="find-links">
                                        <NavLink to="/">
                                            <i className="fab fa-linkedin-in"></i>
                                        </NavLink>
                                        <NavLink to="/">
                                            <i className="fal fa-envelope"></i>
                                        </NavLink>
                                        <NavLink to="/">
                                            <i className="fab fa-github"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="intro-right">
                            <div className="img-contain">
                                <img src={face} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Intro;
