import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Features extends Component {
    render() {
        return (
            <Fragment>
                <section id='features' data-aos="fade-up">
                    <div className="main-feature-container">
                        <h3>FEATURES</h3>
                        <h1>What I Do</h1>

                        <div data-aos="fade-up" className="cards-container">
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="far fa-arrow-right"></i>
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink to='/' className="my-one-card">
                                <div className="card-hover">
                                    <div className="card-icon1">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                    <div className="card-title">
                                        <h2>App Development</h2>
                                    </div>
                                    <div className="card-desc">
                                        <p>Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Nisi provident fuga distinctio.</p>
                                    </div>
                                    <span className="hiden-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Features;