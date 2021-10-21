import React, {useState,useContext, useEffect} from 'react'
import AlertContext from '../Context/Alert/AlertContext'
import AuthContext from '../Context/Auth/AuthContext'
import Alert from '../Layout/Alert'
import axios from "axios"

export default function () {
    const [user,setUser] = useState({
        firstname:'',
        lastname:'',
        gender:'',
        age:'',
        username:'',
        phonenumber:'',
        email:'',
        password:'',      
    });
    //context
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {Register,reg} = authContext;
    const [loading, setLoading] = useState(false)

    useEffect( ()=>{
        if ( reg && reg.isSuccess){
            setLoading(false)
            setAlert(reg.message,'success');
        }
    }, [reg])

    const{firstname,lastname,email,password,password2} = user;

    const onChange = e => {
          setUser({...user, [e.target.name]:e.target.value});
    }
    
    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        if(firstname===''||email===''||password==='') {
        setAlert('please enter all fields','danger');
        setLoading(false)
        return
   
    }
        if (password!==password2) {
        setAlert('Password must be the same','danger');
        setLoading(false)
        return
    }

    const formData = {firstname,lastname,email,password}
    const response = await Register(formData)
            if (!response) {
        setAlert('email has already been taken','danger');
        setLoading(false)
        return
    
       }
       


    //    console.log("reg:",reg)
    //     //    if (reg.isSuccess){
    //     //        setAlert(reg.message,'success');
    //     //    }
    
}
    return ( 
        <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                  <div className="card col-md-7 auto m-auto"> 
                  <div className='row auto d-flex justify-content-center align-center mt-4'>  
                  <h2 className="card-title mt-5" style={{textAlign:"center"}}>Register</h2> 
                        
                    <div className="col-sm-10 col-md-10 col-lg-6">
                    <div className="page-cover text-center">                  
                     <div className="card-body">
                     <Alert style={{textAlign:"center"}}/> 
                    
                        <form onSubmit={onSubmit}>            
                        <div className="form-group mb-2">
                        <input type="text" name="firstname" value={firstname} onChange={onChange}  placeholder="Firstname"  className="form-control" />
                        </div>
                 

                
                   <div className="form-group mb-2">
                      <input type="text" name="lastname"  value={lastname} onChange={onChange} placeholder="Lastname"  className="form-control" />
                   </div>
               

            
               



            
                

              
                   
             

            
                    <div className="form-group mb-2">
                       <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} className="form-control" />
                    </div>
            
              

                    <div className="form-group mb-2">
                        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} className="form-control" minLength="6"/>
                    </div>

                    <div className="form-group mb-2">
                        <input type="password" name="password2" placeholder="CorfirmPassword" value={password2} onChange={onChange} className="form-control" minLength="6"/>
                    </div>
            
    
                    <div className="form-group">
                        <input type="submit" className= "btn btn-primary btn-block form-control" value= {loading ? 'Please wait...' : 'Register User'}/>
                    </div>
            
               </form>
               
              </div>
             </div>
            </div>
       </div>
     </div>
   </div>
    
  </section>
    )
}
