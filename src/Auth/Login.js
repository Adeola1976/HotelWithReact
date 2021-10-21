import React, {useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AlertContext from '../Context/Alert/AlertContext'
import AuthContext from '../Context/Auth/AuthContext'
import Alert from '../Layout/Alert'

export default function Login(props) {


    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false)

    const {setAlert} = alertContext;
    const {Login,isAutheticated,Authuser} = authContext;

    
    useEffect( () => {
        if (isAutheticated)  {
           props.history.push('./')
        }
      
     
    },[Authuser,isAutheticated,props.history]);
   
    const [user,setUser] = useState({
        email:'',
        password:'',      
    });

 
    const{email,password} = user;
    const onChange = e => {
        setUser({...user, [e.target.name]:e.target.value});
    }
    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
       // console.log('Login  user');
        if(email===''||password==='') {
         setLoading(true);
        setAlert('please enter all fields','danger');
        setLoading(false)
    }

    
       

        else {
       const response = await  Login({
            email,
            password
        });
      
        if (!response) {
            setLoading(true);
            setAlert('incorrect credentials','danger');
            setLoading(false);
        }

       
    }
}
    return (
        <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                  <div className="card col-md-6 auto m-auto"> 
                  <div className='row auto d-flex justify-content-center align-center mt-5'>  
                  <h2 className="card-title mt-5" style={{textAlign:"center"}}>Login</h2>         
                    <div className="col-sm-10 col-md-9 col-lg-6">
                    <div className="page-cover text-center">                  
                     <div className="card-body">
                        <form onSubmit={onSubmit}>            
                        <Alert style={{textAlign:"center"}}/> 
        
            
                    <div className="form-group mb-3">
                       <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} className="form-control" />
                    </div>
            
              

                    <div className="form-group mb-3">
                        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} className="form-control"/>
                    </div>
            
    
                    <div className="form-group mb-4">
                        <input type="submit" className= "btn btn-primary btn-block form-control" value={loading?"please wait":"Login"}/>
                    </div>
                       
               </form>

               <Link style={{float:"right", textDecoration:"none"}} className="mb-4" to="/forgetpassword">Forget Password</Link>

              </div>
             </div>
            </div>
       </div>
     </div>
   </div>
    
  </section>
    )
}
