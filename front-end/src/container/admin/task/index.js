import React, { Component } from 'react';
import register from "./img/hoang2.JPG"

class Task extends Component {
    render() {
        return (
            <div>
                <div className="task-admin" style={{backgroundColor:"#FFFFFF", borderRadius:"10px",padding:"0 20px"}}>
                        <h3 style={{paddingTop:"40px"}}>List task</h3>
                        <div className="d-flex flex-row bd-highlight mb-3 task-admin-action">
                            <div className="p-2 bd-highlight">
                                <label className="task-admin-search" style={{marginBottom:"20px" }}>                               
                                    <input type="text" name="filter_array" placeholder="Search"  /><i className="fa fa-search"></i>
                                </label>
                            </div>
                            <div className="p-2 bd-highlight task-admin-action-i" style={{marginLeft:"20px"}}><i className="fa fa-chevron-left"></i></div>
                            <div className="p-2 bd-highlight task-admin-action-i"><i className="fa fa-chevron-right"></i></div>
                            <div className="p-2 bd-highlight task-admin-action-i" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-plus"></i></div>
                            <div className="p-2 bd-highlight task-admin-action-i" ><i className="fa fa-edit"></i></div>
                            <div className="p-2 bd-highlight task-admin-action-i" ><i className="fa fa-trash"></i></div>                            
                        </div>

                        <table className="table">
                            <thead>
                                <tr>                                
                                <th scope="col">#</th>
                                <th scope="col">Job</th>
                                <th scope="col">Category</th>
                                <th scope="col">Progress</th>
                                <th scope="col">Assignee</th>
                                <th scope="col">Register User</th>
                                <th scope="col">Registered Date</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Effort</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                </div>
                <div className="task-admin-modal">
                    <div>
                    {/* Modal */}
                        <form className="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog task-modal">
                                <div className="modal-content task-modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">New Task</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                    </div>
                                    <div className="modal-body container">
                                    <div className="d-flex flex-row bd-highlight mb-3">
                                    <label className="bd-highlight task-right-item-seperate-3 final-class">
                                        JOB TYPE:<br/>                                       
                                        <select name="roll" id="roll_select"   style={{width:"100%", padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>
                                            <option value="">Choose option</option>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                    </label>
                                    <label className="bd-highlight task-right-item-seperate-3 final-class">
                                        IMPORTANT:<br/>                                       
                                        <select name="roll" id="roll_select"   style={{width:"100%", padding:"2px", width:"200px", height:"30px", fontSize:"16px" }}>
                                            <option value="">Choose option</option>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                    </label>
                                    <label className="bd-highligh task-right-item-seperate-3">
                                        DUE DATE:<br/>
                                        <input type="date" name="birth_day" id="birth_day" style={{width:"200px", height:"30px", fontSize:"16px" }} />
                                    </label>
                                    </div>
                                    {/* body */}
                                    <div className="task-modal-body row" >
                                        <div className="task-model-body-left col-lg-8" >
                                            <div className="task-modal-body-item" style={{width:"100%", position:"relative"}}>
                                                <input type="text" name="title" id="title" placeholder="Write a title" style={{width:"100%", border:"2px solid  #DDDDDD",padding:"6px 0"}} />
                                            </div>
                                            <div className="task-modal-body-item" style={{width:"100%", position:"relative"}}>
                                                <textarea name="description" id="description" placeholder="Write description" style={{width:"100%",border:"2px solid  #DDDDDD",padding:"6px 0"}} rows="20" cols="200" />
                                            </div>
                                            <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"100px", backgroundColor:"#F2F2F2"}}>
                                                <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i>Attachment</i>
                                                <input type="file" name="file" id="file" placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                            </label>
                                        </div>
                                        <div className="task-modal-body-right col-lg-4 container">
                                            <div className="task-modal-body-right-item d-flex" style={{backgroundColor:"#0097CC", width:"100%"}}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center", width:"49%", padding:"8px 0px"}}>Phase</div>
                                                <div className="task-model-line w-10" style = {{height:"40px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", padding:"8px 0px"}}>PIC</div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Register</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Confirmation</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Implementation</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Test</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Approval</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Finish</p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="task-modal-body-right-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"35px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"156px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                    <img src={register} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <select name="roll" id="register" style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                        <option value="">Choose option</option>
                                                        <option value="Hoang Nguyen Tran">Hoang Nguyen Tran</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                    {/* /body */}   
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* Modal */}
                    </div>

                </div>
            </div>
        );
    }
}

export default Task;