import React, { Component, Fragment } from 'react';
import contact1 from '../assets/images/contact1.png';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="main-port-section" data-aos="fade-up">
                        <h3>CONTACT</h3>
                        <h1>Contact With Me</h1>

                        <div data-aos="fade-up" className="contact-container">
                            
                            <div data-aos="fade-up" className="contact-left">
                                <div className="contact-left-inner">
                                    <div className="contact-image-container">
                                        <img src={contact1} alt="" />
                                    </div>
                                    <div className="contact-info">
                                        <h1>Md Fazle Rabbi</h1>
                                        <span className="contact-title">
                                            Chief Operating Officer
                                        </span>
                                        <p className="avail-messege">
                                            I am available for freelance work. Connect with me via and call in to my account.
                                        </p>
                                        <div className="contact-contact">
                                            <p>Phone : <NavLink to='/'>+8801879923111</NavLink></p>
                                            <p>Email : <span>arafat.rony1999@gmail.com</span></p>
                                        </div>
                                    </div>
                                    
                                    <div className="my-links-section links-contact">
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
                                    </div>
                                </div>
                            </div>



                            <div data-aos="fade-up" className="contact-right">
                                <form>
                                    <div className="form-row flex-input">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">YOUR NAME</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">PHONE NUMBER</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">YOUR EMAIL</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress2">SUBJECT</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">YOUR MESSEGE</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                    </div>

                                    <button className='form-submit-button'>
                                        SEND MESSEGE
                                        <span>
                                            <i className="far fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Contact;
