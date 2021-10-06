import { POST_SIGNUP_REQUEST,
        POST_SIGNUP_SUCCESS,
        POST_SIGNUP_FALIED} 
        from './constant.js'

import Axios from 'axios'


export const actPostSignUpEmployeesAPI = (userSignUp) =>{
    return dispatch =>{
        dispatch(actPostSignUpEmployeesRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/staff/insert",
            data:userSignUp
        })
        .then(result =>{
            dispatch(actPostSignUpEmployeesSuccess(result.data))
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
}


export const actPostSignUpEmployeesRequest = () =>{
    return{
        type:POST_SIGNUP_REQUEST
    }
}

export const actPostSignUpEmployeesSuccess = data =>{
    return {
        type: POST_SIGNUP_SUCCESS,
        data
    }
}

export const actPostSignUpEmployeesFailed = err =>{
    return {
        type: POST_SIGNUP_FALIED,
        err
    }
}