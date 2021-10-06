import React, { Component } from 'react';
import cardPersonBg from "./img/background-person-card.jpg"
import personCard from "./img/hoang2.JPG"

class Employees extends Component {
    render() {
        return (
            <div className="employees-content row">
                <div className="employees-left col-lg-8">
                    List Employees
                </div>
                <div className="employees-right col-lg-4">
                    <div className="employees-right-card">
                        <img src={cardPersonBg}  alt="admin"/>
                        <div className="employees-right-card-person">
                            <img src={personCard}  alt="admin"/>
                            <i className="fa fa-camera"></i>
                        </div>
                    </div>
                    <form className="employees-right-form">
                        <label className="employees-right-item">
                            Employee ID:<br/>
                            <input type="text" name="employee_id" style={{width:"100%"}}/>
                        </label>
                        <div className="employees-right-item d-flex justify-content-between">
                            <label className="bd-highligh employees-right-item-seperate-2">
                                UserName:<br/>
                                <input type="text" name="user_name" style={{width:"100%"}}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-2">
                                Password:<br/>
                                <input type="text" name="password " style={{width:"100%"}}/>
                            </label>
                        </div>
                        <label className="employees-right-item">
                            Full Name:<br/>
                            <input type="text" name="full_name" style={{width:"100%"}}/>
                        </label>
                        <label className="employees-right-item">
                            Email:<br/>
                            <input type="text" name="email" style={{width:"100%"}}/>
                        </label>
                        <div className="employees-right-item d-flex justify-content-between">
                            <label className="bd-highligh employees-right-item-seperate-3">
                                Birth Day:<br/>
                                <input type="date" name="birth_day" id="birth_day" style={{width:"100%"}}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-3 ">
                                Position:<br/>
                                <input type="text" name="position " id="position" style={{width:"100%"}}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-3 final-class">
                                Roll:<br/>
                                <input type="text" name="roll" id="roll" style={{width:"100%"}}/>
                            </label>
                        </div>
                        <button className="btn btn-outline-danger" style={{width:"100%", marginTop:"10px", marginBottom:"20px"}}>Add Employees</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Employees;