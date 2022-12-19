import React, { Component, Fragment } from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';

class Popularclients extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="main-port-section" data-aos="fade-up">
                        <h3>POPULAR CLIENTS</h3>
                        <h1>Awesome Clients</h1>
                        <div className="popular-container">
                            <div data-aos="fade-up" className="popular-left">
                                <button className='button-active'>JAVASCRIPT</button>
                                <button>Javascript</button>
                                <button>Product Design</button>
                                <button>Wordpress</button>
                                <button>HTML to React</button>
                                <button>React to Laravel</button>
                                <button>Python</button>
                            </div>


                            <div data-aos="fade-up" className="popular-right">

                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client2} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client3} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client2} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client3} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client2} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client3} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client2} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client3} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
                                    </div>
                                </div>
                                <div className="popular-card">
                                    <div className="popular-image">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="popular-name">
                                        <span>Arafat Rony</span>
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

export default Popularclients;
