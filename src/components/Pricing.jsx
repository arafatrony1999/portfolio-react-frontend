import React, { Component, Fragment } from 'react';
import $ from 'jquery';

class Pricing extends Component {
    componentDidMount(){
        $('#btn-id-static').on('click',function(){
            $('#btn-id-static').addClass('active-price');
            
            $('#btn-id-standard').removeClass('active-price');
            $('#btn-id-premium').removeClass('active-price');

            $('.price-div1').removeClass('d-none');
            $('.price-div2').addClass('d-none');
            $('.price-div3').addClass('d-none');
        });
        
        $('#btn-id-standard').on('click',function(){
            $('#btn-id-standard').addClass('active-price');
            
            $('#btn-id-static').removeClass('active-price');
            $('#btn-id-premium').removeClass('active-price');

            $('.price-div1').addClass('d-none');
            $('.price-div2').removeClass('d-none');
            $('.price-div3').addClass('d-none');
        });
        
        $('#btn-id-premium').on('click',function(){
            $('#btn-id-premium').addClass('active-price');
            
            $('#btn-id-static').removeClass('active-price');
            $('#btn-id-standard').removeClass('active-price');
            
            $('.price-div1').addClass('d-none');
            $('.price-div2').addClass('d-none');
            $('.price-div3').removeClass('d-none');
        });
    }
    render() {
        return (
            <Fragment>
                <section>
                    <div className="pricing-section">
                        <div className="pricing">
                            <div className="pricing-left">
                                <span>PRICING</span>
                                <p>My Pricing</p>
                            </div>
                            <div className="pricing-right">
                                <div className="pricing-header">
                                    <button id='btn-id-static'>Static</button>
                                    <button id='btn-id-standard' className='active-price'>Standard</button>
                                    <button id='btn-id-premium'>Premium</button>
                                </div>

                                <div className="price-div1 d-none">
                                    <div className="pricing-title">
                                        <div className="pricing-title-left">
                                            <h1>Make Your Single Page</h1>
                                            <p>Elementor</p>
                                        </div>
                                        <div className="pricing-title-right">
                                            <span>$50.00</span>
                                        </div>
                                    </div>

                                    <div className="pricing-dummy">
                                        <p>Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                    </div>

                                    <div className="pricing-details">
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>1 Page with Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Responsive Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>2 Plugins/Extensions</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Multipage Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Figma</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Maintaine Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design With XD</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>8 Plugins/Extensions</span>
                                        </div>
                                    </div>

                                    <div className="pricing-btn">
                                        <button>ORDER NOW</button>
                                        <span><i class="fal fa-clock"></i>2 Days Delivery</span>
                                        <span><i class="fal fa-undo-alt"></i>Unlimited Revission</span>
                                    </div>
                                </div>


                                <div className="price-div2">
                                    <div className="pricing-title">
                                        <div className="pricing-title-left">
                                            <h1>Design Make this Page</h1>
                                            <p>Elementor</p>
                                        </div>
                                        <div className="pricing-title-right">
                                            <span>$50.00</span>
                                        </div>
                                    </div>

                                    <div className="pricing-dummy">
                                        <p>Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                    </div>

                                    <div className="pricing-details">
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>1 Page with Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Responsive Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>2 Plugins/Extensions</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Multipage Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Figma</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Maintaine Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design With XD</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>8 Plugins/Extensions</span>
                                        </div>
                                    </div>

                                    <div className="pricing-btn">
                                        <button>ORDER NOW</button>
                                        <span><i class="fal fa-clock"></i>2 Days Delivery</span>
                                        <span><i class="fal fa-undo-alt"></i>Unlimited Revission</span>
                                    </div>
                                </div>


                                <div className="price-div3 d-none">
                                    <div className="pricing-title">
                                        <div className="pricing-title-left">
                                            <h1>Customize Your Single Page</h1>
                                            <p>Elementor</p>
                                        </div>
                                        <div className="pricing-title-right">
                                            <span>$50.00</span>
                                        </div>
                                    </div>

                                    <div className="pricing-dummy">
                                        <p>Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                    </div>

                                    <div className="pricing-details">
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>1 Page with Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Responsive Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Customization</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>2 Plugins/Extensions</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Multipage Elementor</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design Figma</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Maintaine Design</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Content Upload</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>Design With XD</span>
                                        </div>
                                        <div className="single-details">
                                            <span><i class="fal fa-check"></i>8 Plugins/Extensions</span>
                                        </div>
                                    </div>

                                    <div className="pricing-btn">
                                        <button>ORDER NOW</button>
                                        <span><i class="fal fa-clock"></i>2 Days Delivery</span>
                                        <span><i class="fal fa-undo-alt"></i>Unlimited Revission</span>
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

export default Pricing;
