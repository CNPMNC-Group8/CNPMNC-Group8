import React, { Component } from 'react';
import cardPersonBg from "./img/background-person-card.jpg"
import personCard from "./img/hoang2.JPG"

import {actPostSignUpEmployeesAPI} from "./module-sign-up/action"
import {actFetchListEmployeesAPI} from "./module-list-employees/action"
import {connect} from 'react-redux'

class Employees extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:{
                employee_id:"", 
                image: personCard, 
                user_name:"",
                password:"",
                full_name:"", 
                email:"", 
                birth_day:"",
                position:"",
                roll:"", 
            },
            image_upload:personCard
        }
    }

    handleOnChange = event =>{
        let {name,value} = event.target;
        if(event.target.files){
            this.setState({
                employees: {...this.state.employees, [name]:value, image: event.target.files[0]}, 
            })
            console.log("event",this.state.employees.image);
            const reader = new FileReader();
            reader.onload = () =>{
                if(reader.readyState === 2){
                    this.setState({
                        // image:reader.result
                        image_upload:reader.result
                    })
                }
                
            }
            
            reader.readAsDataURL(event.target.files[0])
        }
        else{
            this.setState({
                employees: {...this.state.employees, [name]:value}, 
            })
        }

        console.log(name,value);

        
       
    }

    handleOnSubmit = event =>{
        event.preventDefault()
        console.log(this.state.employees)  
        let data = new FormData();
        data.append("image", this.state.employees.image)
        data.append("user_name", this.state.employees.user_name)
        data.append("password", this.state.employees.password)
        data.append("full_name", this.state.employees.full_name)
        data.append("email", this.state.employees.email)
        data.append("birth_day", this.state.employees.birth_day)
        data.append("position", this.state.employees.position)
        data.append("roll", this.state.employees.roll)
        // this.props.PostSignUp(data)
        console.log('data',Array.from(data))

        this.props.PostSignUp(data)
     }

    componentDidMount(){
        this.props.FetchListEmployees();
    }

    renderHTMLAdmin = () =>{
        const {listEmployees} = this.props
        console.log("renderHTMLAdmin",listEmployees)
        // if(listEmployees.result){
        //     console.log("listEmployees.result",listEmployees.result.length)
        // }

        // const listEmployeesAdmin =  listEmployees.result.filter(item =>(item.ROLL === "ADMIN"))
        

        if(listEmployees.result && listEmployees.result.length > 0){
            const listFilterEmployees = listEmployees.result.filter(item => item.ROLL === "ADMIN")
            console.log("listFilterEmployees", listFilterEmployees)
            // console.log("listEmployeesAdmin",listEmployees.result.filter(item => item.ROLL === "ADMIN"))
            return listEmployees.result.map((item, index)=>{
                return(
                    <tr key={index}>
                        <th scope="row" style={{display:"none"}}>{item.EMPLOYEE_ID}</th>
                        <td style={{display:"none"}}>{item.IMAGE}</td>
                        <td>{item.USER_NAME}</td>
                        <td>{item.PASSWORD}</td>
                        <td>{item.FULL_NAME}</td>
                        <td>{item.EMAIL}</td>
                        <td>{item.BIRTH_DAY}</td>
                        <td>{item.POSITION}</td>
                        <td>{item.ROLL}</td>
                    </tr>
                )
            })
        }
     }


    render() {
        return (
            <div className="employees-content row">
                <div className="employees-left col-lg-9">
                    <div className="employees-admin">
                        <h3>List user Admin</h3>
                        <label className="employees-admin-search">                               
                                <input type="text" name="user_name" placeholder="Search"/><i className="fa fa-search"></i>
                        </label>
                        <table className="table">
                            <thead>
                                <tr>                                
                                <th scope="col">USERNAME</th>
                                <th scope="col">PASSWORD</th>
                                <th scope="col">FULL NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">BIRTH DAY</th>
                                <th scope="col">POSITION</th>
                                <th scope="col">ROLL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <th scope="row">EMPLOYEE ID</th>
                                    <td style={{display:"none"}}>EMPLOYEE ID</td>
                                    <td>USERNAME</td>
                                    <td>PASSWORD</td>
                                    <td>FULL NAME</td>
                                    <td>EMAIL</td>
                                    <td>BIRTH DAY</td>
                                    <td>POSITION</td>
                                    <td>ROLL</td>
                                </tr> */}
                                {this.renderHTMLAdmin()}
                            </tbody>
                        </table>

                    </div>
                </div>
                <form className="employees-right col-lg-3" onSubmit={this.handleOnSubmit} method="post">
                    <div className="employees-right-card">
                        <img src={cardPersonBg} name="image_upload"  alt="admin"/>
                        <div className="employees-right-card-person">
                            <img  src={this.state.image_upload} name="image_upload" alt="admin"/>
                            <label>
                                <i className="fa fa-camera"></i><br/>
                                <input type="file" name="image" id="image" style={{display:'none'}}  onChange={this.handleOnChange}/>
                            </label>
                        </div>
                    </div>
                    <div className="employees-right-form">
                        <label className="employees-right-item">
                            Employee ID:<br/>
                            <input type="text" name="employee_id" value={this.state.employees.employee_id} style={{width:"100%"}} onChange={this.handleOnChange}/>
                        </label>
                        <div className="employees-right-item d-flex justify-content-between">
                            <label className="bd-highligh employees-right-item-seperate-2">
                                UserName:<br/>
                                <input type="text" name="user_name" value={this.state.employees.user_name} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-2">
                                Password:<br/>
                                <input type="text" name="password" value={this.state.employees.password} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                        </div>
                        <label className="employees-right-item">
                            Full Name:<br/>
                            <input type="text" name="full_name" value={this.state.employees.full_name} style={{width:"100%"}} onChange={this.handleOnChange}/>
                        </label>
                        <label className="employees-right-item">
                            Email:<br/>
                            <input type="text" name="email" value={this.state.employees.email} style={{width:"100%"}} onChange={this.handleOnChange}/>
                        </label>
                        <div className="employees-right-item d-flex justify-content-between">
                            <label className="bd-highligh employees-right-item-seperate-3">
                                Birth Day:<br/>
                                <input type="date" name="birth_day" id="birth_day" value={this.state.employees.birth_day} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-3 ">
                                Position:<br/>
                                <input type="text" name="position" id="position" value={this.state.employees.position} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                            <label className="bd-highlight employees-right-item-seperate-3 final-class">
                                Roll:<br/>
                                <input type="text" name="roll" id="roll" value={this.state.employees.roll} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                        </div>
                        <button className="btn btn-outline-danger" type="submit" style={{width:"100%", marginTop:"10px", marginBottom:"20px"}}>Add Employees</button>
                    </div>
                </form>


            </div>
        );
    }
}

export const mapStateToProp = state =>{
    return {
        listEmployees: state.listEmployeesReducer.listEmployees
    }
}

export const mapDispatchToProp = dispatch =>{
    return{

        FetchListEmployees: () =>{ 
            dispatch(actFetchListEmployeesAPI())
        },
        PostSignUp:( userSignUp) =>{
            dispatch(actPostSignUpEmployeesAPI(userSignUp))
        },


    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Employees)