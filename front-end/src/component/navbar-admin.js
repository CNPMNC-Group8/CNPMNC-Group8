import React, { Component } from 'react';

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
        else{
            this.setState({title: "Title"})
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="d-flex justify-content-between navbar-content">
                    <div className="navbar-left">
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="navbar-left">
                        
                    </div>
                </div>
            </div>
        );
    }

}



export default Navbar;