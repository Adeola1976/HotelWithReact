import React,{useReducer} from 'react'
import AlertContext from './AlertContext'
import alertReducer from './AlertReducer'
import {v4 as uuid} from 'uuid'
import {
     SET_ALERT,
     REMOVE_ALERT
} from '../../Types'
 


    const AlertState = props => {
    const initialState = [];
    const setAlert = (msg,type,timeout=5000) => {
        const id = uuid();
        dispatch({type:SET_ALERT,payload:{id,msg,type}});
        setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),timeout);
    }
       


    //pass the state to the reducer
    const [state,dispatch]   = useReducer(alertReducer,initialState);



    //loan user


    //Register User


    //Login User


    //Logout


    //clear User
  
    

    return  (
     <AlertContext.Provider value={{setAlert,alert:state}}>
          {props.children}      
    </AlertContext.Provider>

     )
}


export default AlertState