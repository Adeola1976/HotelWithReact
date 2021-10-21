 
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAILED,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERROR,

} from '../../Types'


export default  (state,action)  => {
    switch(action.type) {

        
        // case USER_LOADED:  
        //     return {
        //          ...state,
        //          isAutheticated:true,
        //          loading:false,
        //          user:action.payload,
        //          error:null            
        //     }   
    
     
        case REGISTER_SUCCESS:
            console.log("Reducer says:",action)
        return {
            ...state,
            reg:action.payload,
            isAutheticated:false,
            loading:false,        
           }

        case LOGIN_SUCCESS:
        localStorage.setItem('token',action.payload.token)    
        return {
             ...state,
             ...action.payload,
             isAutheticated:true,
             loading:false, 
             Authuser:action.payload       
        }

        case FORGET_PASSWORD_SUCCESS:
        return {
         ...state,
         resforgetpass:action.payload
        }
       
        case RESET_PASSWORD_SUCCESS:
            return {
             ...state,
             reset:action.payload
            }


      
        case LOGIN_FAIL:
        case FORGET_PASSWORD_FAILED: 
        case RESET_PASSWORD_FAILED:
       // case AUTH_ERROR:   
          localStorage.removeItem('token') 
           return {
            ...state,
            token:null,
            isAutheticated:false,
            loading:false, 
            user:null,
            error:action.payload     
       }

    //  case CLEAR_ERROR:
    //      return {
    //          ...state,
    //          error:null
    //      }
    //      case LOGOUT:
    //         return {
    //          ...state,
    //          isAutheticated:false,
    //         }
        default: return state;
    }

   
} 