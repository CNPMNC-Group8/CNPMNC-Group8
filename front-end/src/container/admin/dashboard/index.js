import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavLink to="/admin">Dashboard</NavLink>
            </div>
        );
    }
}

export default Dashboard;