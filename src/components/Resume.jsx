import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import AOS from 'aos';

class Resume extends Component {
    componentDidMount(){
        AOS.init();
        $('#btn-id1').on('click',function(){
            $('#btn-id2').removeClass('resume-nav-active');
            $('#btn-id3').removeClass('resume-nav-active');
            $('#btn-id4').removeClass('resume-nav-active');
            $('#btn-id1').addClass('resume-nav-active');

            $('#div-id1').removeClass('display-none');
            $('#div-id2').addClass('display-none');
            $('#div-id3').addClass('display-none');
            $('#div-id4').addClass('display-none');
        });
        $('#btn-id2').on('click',function(){
            $('#btn-id1').removeClass('resume-nav-active');
            $('#btn-id3').removeClass('resume-nav-active');
            $('#btn-id4').removeClass('resume-nav-active');
            $('#btn-id2').addClass('resume-nav-active');

            $('#div-id2').removeClass('display-none');
            $('#div-id1').addClass('display-none');
            $('#div-id3').addClass('display-none');
            $('#div-id4').addClass('display-none');
        });
        $('#btn-id3').on('click',function(){
            $('#btn-id1').removeClass('resume-nav-active');
            $('#btn-id2').removeClass('resume-nav-active');
            $('#btn-id4').removeClass('resume-nav-active');
            $('#btn-id3').addClass('resume-nav-active');
            
            $('#div-id3').removeClass('display-none');
            $('#div-id1').addClass('display-none');
            $('#div-id2').addClass('display-none');
            $('#div-id4').addClass('display-none');
        });
        $('#btn-id4').on('click',function(){
            $('#btn-id1').removeClass('resume-nav-active');
            $('#btn-id2').removeClass('resume-nav-active');
            $('#btn-id3').removeClass('resume-nav-active');
            $('#btn-id4').addClass('resume-nav-active');
            
            $('#div-id4').removeClass('display-none');
            $('#div-id1').addClass('display-none');
            $('#div-id2').addClass('display-none');
            $('#div-id3').addClass('display-none');
        });
    }

    render() {
        return (
            <Fragment>
                <section data-aos="fade-up">
                    <div className="main-port-section">
                        <h3>7+ YEARS OF EXPERIENCE</h3>
                        <h1>My Resume</h1>

                        <div className="resume-navs">
                            <button id='btn-id1' className='resume-nav-active'>Education</button>
                            <button id='btn-id2'>Professional Skills</button>
                            <button id='btn-id3'>Experience</button>
                            <button id='btn-id4'>Interview</button>
                        </div>



                        <div id="div-id1" data-aos="fade-up">
                            
                            <div className="resume-main">

                                <div className="resume-main-left">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    
                                    <div className="resume-left">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="resume-main-right">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    <div className="resume-right">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>


                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                        <div id="div-id2" data-aos="fade-up" className='display-none'> 
                             
                            <div className="resume-main">

                                <div className="resume-main-left">
                                    <div className="resume-titles">
                                        <span>DFeatures</span>
                                        <p>Design Skill</p>
                                    </div>
                                    
                                    <div className="resume-left">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
                                    </div>
                                </div>




                                <div className="resume-main-right">
                                    <div className="resume-titles">
                                        <span>Features</span>
                                        <p>Development Skill</p>
                                    </div>
                                    <div className="resume-right">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>


                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div id="div-id3" data-aos="fade-up" className='display-none'>
                            
                            <div className="resume-main">

                                <div className="resume-main-left">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    
                                    <div className="resume-left">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
                                    </div>
                                </div>




                                <div className="resume-main-right">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    <div className="resume-right">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>


                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                        
                        <div id="div-id4" data-aos="fade-up" className='display-none'>
                            
                            <div className="resume-main">

                                <div className="resume-main-left">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    
                                    <div className="resume-left">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
                                    </div>
                                </div>




                                <div className="resume-main-right">
                                    <div className="resume-titles">
                                        <span>2007 - 2010</span>
                                        <p>Education Quality</p>
                                    </div>
                                    <div className="resume-right">

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>


                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-margin"></div>

                                        <div className="resume-card">
                                            <div className="card-box">
                                                <div className="my-circle"></div>
                                                <div className="card-top">
                                                    <div className="card-top-left">
                                                        <span>Personal Portfolio April Fools</span>
                                                        <p>University of DVI (1997 - 2001)</p>
                                                    </div>
                                                    <div className="card-top-right">
                                                        <span>4.30 / 5</span>
                                                    </div>
                                                </div>
                                                <div className="card-bottom">
                                                    <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="my-margin"></div> */}
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

export default Resume;
