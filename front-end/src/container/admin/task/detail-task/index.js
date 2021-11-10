import React, { Component } from 'react';
import register from "../img/hoang2.JPG"
import './index.css'

class DetailTask extends Component {
    constructor(props) {
        super(props)
        this.state={
            task: {
                task_id:"",
                job:"Bug Fixing",
                status:"",
                category:"KFC",
                title:"",
                progress:"",
                assignee:"",
                register_user:"",
                start_date:"",
                end_date:"",
                effort:"",
                important:"Very Important",
                description:"",
                file:"",
                confirmation:"",
                implementation:"",
                test:"",
                approval:"",
                finish:"",
                step:"",             
            },
            filter_array:"",
            nameFile:"Attachment",
            imgEmployeesSelectRegister:register,
            imgEmployeesSelectConfirmation:register,
            imgEmployeesSelectImplementation:register,
            imgEmployeesSelectTest:register,
            imgEmployeesSelectApproval:register,
            imgEmployeesSelectFinish:register,

        }
    }
    render() {
        return (
            <div>
                <div className="detail-task-top">
                    <p style={{marginBottom:"0px"}}>#6147</p>
                </div>
                <div className="detail-task-container row" style={{marginLeft:"0px", marginRight:"0px"}}>
                    <div className="detail-task-left col-lg-8" style={{position:"relative", paddingLeft:"0px"}}>
                        <div className="detail-task-left-top d-flex flex-row bd-highlight mb-3" style={{width:"100%"}}>
                            <div className="bd-highlight detail-task-left-top-item">
                                <p style={{marginBottom:"0px", fontSize:"14px", color:"#313131"}}>CATEGORY</p>
                                <p style={{marginLeft:"20px", marginBottom:"0px" , fontSize:"12px", color:"#a4a4a4"}}><i className="fa fa-play"></i> KFC</p>
                            </div>
                            <div className="bd-highlight detail-task-left-top-item">
                                <p style={{marginBottom:"0px", fontSize:"14px", color:"#313131"}}>ITERATION</p>
                                <p style={{marginLeft:"20px", marginBottom:"0px",  fontSize:"12px", color:"#a4a4a4"}}><i class="fab fa-joomla"></i> Documentation</p>
                            </div>
                        </div>
                        <div className="detail-task-left-body">
                            <div className="d-flex flex-row-reverse bd-highlight">
                                <div className="p-2 bd-highlight">Flex item 1</div>
                                <div className="p-2 bd-highlight">Flex item 2</div>
                                <div className="p-2 bd-highlight">Flex item 3</div>
                            </div>

                        </div>
                    </div>
                    <div className="detail-task-left col-lg-4">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailTask;