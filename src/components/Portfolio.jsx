import React, { Component, Fragment } from 'react';
import portfolio1 from '../assets/images/portfolio-01.jpg';
import portfolio2 from '../assets/images/portfolio-02.jpg';
import portfolio3 from '../assets/images/portfolio-03.jpg';
import portfolio4 from '../assets/images/portfolio-04.jpg';
import portfolio5 from '../assets/images/portfolio-05.jpg';
import portfolio6 from '../assets/images/portfolio-06.jpg';

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="main-port-section" data-aos="fade-up">
                        <h3>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
                        <h1>My Portfolio</h1>

                        <div data-aos="fade-up" className="port-card-container">

                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio1} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>DEVELOPMENT</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                The services provide for design
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio2} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>APPLICATION</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                Mobile app landing design & app maintain
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio3} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>PHOTOSHOP</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                Logo design creativity and application
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio4} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>FIGMA</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                Mobile app landing design & services
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio5} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>WEB DESIGN</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                App for technology and services
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={portfolio6} alt="" />
                                    </div>
                                    <div className="port-span">
                                        <div className="port-title">
                                            <span className='title-span'>DEVELOPMENT</span>
                                            <span className='left-span'><i className="fal fa-heart"></i>600</span>
                                        </div>
                                        <div className="port-desc">
                                            <h2>
                                                Design for technology and services
                                                <span>
                                                    <i className="fal fa-external-link-alt"></i>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Portfolio;