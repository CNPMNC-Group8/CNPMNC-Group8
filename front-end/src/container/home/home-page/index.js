import React, { Component } from 'react';
import videoClass from './video/uef.mp4'

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <video src={videoClass} autoPlay loop muted />
            </div>
        );
    }
}

export default HomePage;