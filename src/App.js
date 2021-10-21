import Header from './Layout/Header'
import Footer  from './Layout/Footer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Errorboundary from './OutPut/RuntimeErrorMessage'
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './Auth/Register'
import Login from './Auth/Login'
import AlertState from './Context/Alert/AlertState'
import AuthState from './Context/Auth/AuthState'
import ForgetPassword from './Auth/ForgetPassword'
import ResetPassword from './Auth/ResetPassword.js'
import './App.css'


function App() {
  return (
   
    <>
       <Router>
        <AuthState>
         <AlertState>
            <Errorboundary>
              <Header/>       
                    <Switch>
                          <Route exact path='/' component={Home}/>
                          <Route exact path='/register' component={Register}/>
                          <Route exact path='/login' component={Login}/>
                          <Route exact path='/about' component={About}/>
                          <Route exact path='/forgetpassword' component={ForgetPassword}/>
                          <Route exact path='/resetpassword' component={ResetPassword}/>
                    </Switch>      
          </Errorboundary>
         </AlertState>
         </AuthState>
      </Router>
    </>
  );
}

export default App;
