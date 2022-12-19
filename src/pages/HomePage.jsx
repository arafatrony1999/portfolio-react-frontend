import React, { Component, Fragment } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Features from '../components/Features';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Popularclients from '../components/PopularClients';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Resume from '../components/Resume';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Intro/>
                <Features/>
                <Portfolio/>
                <Resume/>
                <Popularclients/>
                <Pricing/>
                <Blog/>
                <Contact/>
            </Fragment>
        );
    }
}

export default Homepage;
