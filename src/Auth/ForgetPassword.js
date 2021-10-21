import React,  {useState,useContext,useEffect} from 'react'
import AlertContext from '../Context/Alert/AlertContext'
import AuthContext from '../Context/Auth/AuthContext'
import Alert from '../Layout/Alert'

export default function ForgetPassword() {
   

    const alertContext = useContext(AlertContext);
    const authContext  = useContext(AuthContext);


    const {setAlert} = alertContext;
    const {forgetpassword,resforgetpass} = authContext;
    const [loading, setLoading] = useState(false)

    useEffect( ()=>{
        if (resforgetpass && resforgetpass.isSuccess)
        setAlert(resforgetpass.message,'success');
        setLoading(false);
    },[resforgetpass])
      
    const [user,setUser] = useState({
        email:''    
    });

    const{email} = user;
    const onChange = e => {
        setUser({...user, [e.target.name]:e.target.value});
    }
    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        if(email==='') {
        setAlert("this  field can't be empty",'danger');
        setLoading(false)
    }

    else {
      const response =   await forgetpassword({
            email         
        });
        if (!response) {
            setAlert("email doesn't exist",'danger');
            setLoading(false)
           }
            
         
    }
}

    return (
        <div>
           
           <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                  <div className="card col-md-6 auto m-auto "> 
                  <div className='row auto d-flex justify-content-center align-center mt-5'>  
                  <h2 className="card-title mt-5" style={{textAlign:"center"}}>Forget Password</h2>         
                    <div className="col-sm-10 col-md-9 col-lg-6">
                    <div className="page-cover text-center">                  
                     <div className="card-body">
                    <form onSubmit={onSubmit}>            
                       <Alert/>
                    <div className="form-group mb-3">
                       <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} className="form-control" />
                    </div>
            
            
    
                    <div className="form-group mb-4">
                        <input type="submit" className= "btn btn-primary btn-block form-control"  value= {loading ? 'Please wait...' : 'Send Link'}/>
                    </div>
                       
               </form>

              </div>
             </div>
            </div>
       </div>
     </div>
   </div>
    
  </section>


        </div>
    )
}
