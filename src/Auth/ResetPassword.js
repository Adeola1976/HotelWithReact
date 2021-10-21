import React,  {useState,useContext,useEffect} from 'react'
import AlertContext from '../Context/Alert/AlertContext'
import AuthContext from '../Context/Auth/AuthContext'
import Alert from '../Layout/Alert'

export default function ForgetPassword(props) {
   

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const token = params.get('token');
    const email = params.get('email');
 
   

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false)

    const {setAlert} = alertContext;
    const {resetpassword,reset} = authContext;

    useEffect( ()=>{

        if (reset&&reset.isSuccess) {
            setLoading(false);
            props.history.push('/login');
         
        }
        },[reset])


    const [user,setUser] = useState({
        password:'',
        confirmpassword:'', 
    });

    const{password,confirmpassword} = user;
    const onChange = e => {
        setUser({...user, [e.target.name]:e.target.value});
    }
    const onSubmit = async  e => {
        e.preventDefault();
        setLoading(true);
        if(password===''||confirmpassword==='') {
        setAlert("field can't be empty",'danger');
        setLoading(false);
        return
    }
      if (password!=confirmpassword) {
        setAlert("password is not the same",'danger');
        setLoading(false);
        return
      }
    else {
      const response =        await resetpassword ({
            email,
            token,
           password,
           confirmpassword    
        });

        if (!response) {
            setAlert("please go back to forget passsword page and send the link again",'danger'); 
            setLoading(false);
        }
    }
}

    return (
        <div>
           
           <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                  <div className="card  col-md-6 auto m-auto"> 
                  <div className='row auto d-flex justify-content-center align-center mt-5'>  
                  <h2 className="card-title mt-5" style={{textAlign:"center"}}>Reset Password</h2>         
                    <div className="col-sm-10 col-md-9 col-lg-6">
                    <div className="page-cover text-center">                  
                     <div className="card-body">
                    <form onSubmit={onSubmit}>            
                       <Alert/>
                    <div className="form-group mb-3">
                       <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} className="form-control" />
                    </div>
                   
                    <div className="form-group mb-3">
                       <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={onChange} className="form-control" />
                    </div>
            
                
    
                    <div className="form-group mb-4">
                        <input type="submit" className= "btn btn-primary btn-block form-control" value= {loading ? 'Please wait...' : 'Change Password'}/>
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
