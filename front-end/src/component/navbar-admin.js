import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            title: "Title"
        }
    }

    componentDidMount(){
        const {path}= this.props;
        if(path && path === "/admin/dashboard") {
            this.setState({title: "Dashboard"})
        }
        else if("/admin/employees"){
            this.setState({title: "Employees"})
        }
        else{
            this.setState({title: "Title"})
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-item">
                            <Link to="#">Account</Link>
                        </div>
                        <div className="navbar-right-item">
                            <Link to="#">Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Navbar;