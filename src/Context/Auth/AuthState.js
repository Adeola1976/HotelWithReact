import React,{useEffect, useReducer, useState} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios'


 
import {
     REGISTER_SUCCESS,
     REGISTER_FAIL,
     USER_LOADED,
     AUTH_ERROR,
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     RESET_PASSWORD_SUCCESS,
     RESET_PASSWORD_FAILED,
     FORGET_PASSWORD_SUCCESS,
     FORGET_PASSWORD_FAILED,
     LOGOUT,
     CLEAR_ERROR,

} from '../../Types'

const AuthState = props => {
    let initialState = {
         token: localStorage.getItem('token'),
         isAutheticated:null,
         loading:true,
         error:null,
         Authuser:null,
         reg:null,
         resforgetpass:null,
         reset:null
}

    //pass the state to the reducer
    const [state,dispatch]   = useReducer(AuthReducer,initialState);
  
  
      

    //load user

    // const loadUser = async () => {

    //          if (localStorage.token) {
    //             setAuthToken(localStorage.token); 
    //          }

    //          try {
    //                      const res = await axios.get('/api/auth');
    //                      dispatch({type:USER_LOADED,payload:res.data}); 
                        
    //          }

    //          catch (err) {
    //                      dispatch({type:AUTH_ERROR})
    //          }
    // }


   
    //Register User
    const Register = async formData => {
 
         
    try{
        const config = {
            headers : {
                'Content-Type': 'application/json'
           } }
    const res = await axios.post(`/register`,formData,config);
        dispatch({type:REGISTER_SUCCESS,payload:res.data});
        return true
    }
         
    catch(err) {  
    dispatch({type:REGISTER_FAIL,payload:err.response}); 
    return false
    }
}


    //Login User
    const Login = async formData => {
     const config = {
      headers : {
          'Content-Type': 'application/json'
       }} 
     try{
        const res = await axios.post(`/login`,formData,config);
        dispatch({type:LOGIN_SUCCESS,payload:res.data}); 
        return true;          
     }
     
     catch(err) {  
      dispatch({type:LOGIN_FAIL,payload:err.response});  
      return false;
     }}


// reset password method

const forgetpassword  = async formData => {
    const config = {
     headers : {
         'Content-Type': 'application/json'
      }}   
    try{
        const res = await axios.post(`/forgetpassword`,formData,config);
        dispatch({type:FORGET_PASSWORD_SUCCESS,payload:res.data}); 
        return true;                             
    }
    
    catch(err) {  
     dispatch({type:FORGET_PASSWORD_FAILED,payload:err.response});  
     return false;
    }}



   
     //resetpassword

   const resetpassword = async formData => {
    const config = {
     headers : {
         'Content-Type': 'application/json'
    }}
    
try{
    const res = await axios.post(`/resetpassword`,formData,config);
    dispatch({type:RESET_PASSWORD_SUCCESS,payload:res.data});  
    return true;
    // loadUser();
}
    
catch(err) {  
    dispatch({type:RESET_PASSWORD_FAILED,payload:err.response}); 
    return false;
}}





//     //Logout

//     const logout = () => {
//         dispatch({type:LOGOUT}); 
    
//     }


    //clear User
  
    

    return  (
     <AuthContext.Provider value={{token:state.token, 
        isAutheticated:state.isAutheticated,  loading:state.loading,resforgetpass:state.resforgetpass
        ,Authuser:state.Authuser,Register,reg:state.reg,Login,forgetpassword,resetpassword,reset:state.reset}}>
          {props.children}      
    </AuthContext.Provider>
    

     )
}


export default AuthState