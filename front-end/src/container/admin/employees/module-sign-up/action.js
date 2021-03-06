import { POST_SIGNUP_REQUEST,
        POST_SIGNUP_SUCCESS,
        POST_SIGNUP_FALIED
    } 
        from './constant.js'

import Axios from 'axios'


export const actPostSignUpEmployeesAPI = (userSignUp) =>{
    return dispatch =>{
        dispatch(actPostSignUpEmployeesRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/staff/insert",
            // headers:{ 
            //     "Content-Type": "multipart/form-data"
            // },
            data:userSignUp
        })
        .then(result =>{
            dispatch(actPostSignUpEmployeesSuccess(result.data))
            console.log(result.data)
        })
        .catch(err =>{
            dispatch(actPostSignUpEmployeesFailed(err))
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