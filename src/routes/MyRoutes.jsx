import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/HomePage';

class MyRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default MyRoutes;
