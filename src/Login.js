import React from 'react';
import "./App.css";
import { Row, Col } from 'react-bootstrap';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
  return (
      <div>
      <Row className="App">
        <Col className="img__Company " xs lg="7">
          <img
            className='Icon__image'
            src="https://www.svgrepo.com/show/111208/twitter.svg"
            alt="PleaseCheck your Network Connection"
            height={400} />
        </Col>
        <Col xs lg="5" className="logForm">
          <div className='Form'>
          <img  className='logform__icon' src="https://www.svgrepo.com/show/111208/twitter.svg" alt="" height={80} />
         
          <h1>Happening now</h1>
          <div className="logContent">
            <h4>Join Twitter Today.</h4>
            
            <div className='button'>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
              <button  onClick={signIn}>Sign up with Google</button>
            </div>
            
            <div className='button'>
            <img src="https://www.svgrepo.com/show/158427/facebook.svg" alt="" />
              <button>Sign up with Facebook</button>
            </div>
  
            <p>~~~~~~~~~~~~~~or~~~~~~~~~~~~~</p>
            <div className='Log__button'>
              <button className='Log__phone'>Sign up with phone</button>
            </div>
            <p></p>
          </div>
          <div className="Signin">
            <h2>Already have an Account</h2>
            <div className='sign__button'>
             
              <button>Sign up With Facebook</button>
            </div>
          </div>
          </div>
        </Col>
  
      </Row>
      </div>
  )
}

export default Login