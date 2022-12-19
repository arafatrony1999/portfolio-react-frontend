import React, { Component, Fragment } from 'react';
import blog1 from '../assets/images/blog-01.jpg';
import blog2 from '../assets/images/blog-02.jpg';
import blog3 from '../assets/images/blog-03.jpg';

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="main-port-section" data-aos="fade-up">
                        <h3>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h3>
                        <h1>My Blogs</h1>

                        <div data-aos="fade-up" className="port-card-container">

                            <div className="port-single-card">
                                <div className="port-card-inner">
                                    <div className="port-image">
                                        <img src={blog1} alt="" />
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
                                        <img src={blog2} alt="" />
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
                                        <img src={blog3} alt="" />
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
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Blog;
