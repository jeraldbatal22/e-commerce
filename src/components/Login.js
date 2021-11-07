import React from 'react'
import styled from 'styled-components'
import GoogleIcon from '@mui/icons-material/Google';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = ({ setisLogin }) => {
  const navigate = useNavigate()
  return (
    <LoginContainer>
      <div className="login_card">
        <h1 style={{ marginBottom: '30px', fontWeight: '600' }}><strong><strong>Online</strong><strong style={{ color: '#4285F4' }}>Shop</strong></strong></h1>
        <p style={{ marginBottom: '30px', color: 'gray' }}>Login with your email & password</p>
        <div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="sample@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="form-group">
            <button onClick={() => {
              toast.success(`Successfully login`)
              setisLogin(true)
              navigate('/')
            }}>Login</button>
          </div>
          <hr></hr>
          <div className="group_button">
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GoogleIcon style={{ marginRight: '10px' }} /> Login With Google</button>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PhoneAndroidIcon style={{ marginRight: '10px' }} /> Login With Mobile Number</button>
          </div>
          <hr></hr>
          <div className="footer" style={{ marginTop: '30px' }}>
            <span>Don't have any account?</span>
            <a href="/registration">Register</a>
          </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Open Sans", system-ui, sans-serif;
  
  .login_card {
    padding: 20px;
    width: 25%;
    border-radius: 10px;
  }
  
  .login_card > h1 {
    text-align:center;
  }
  .login_card > p  {
    text-align:center;
  }

  .login_card .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .login_card .form-group label,  .login_card .form-group input{
    margin: 2px 0px;
  
  }
   .login_card .form-group input {
    border-radius: 7px;
    border:none;
    border: 1px solid gray;
  }

  .login_card .form-group input, button {
    padding:15px 15px ;
  }
  .login_card .form-group button {
    background: #4285F4;
    border: none;
    color: #ffff;
    font-weight: 600;
    cursor: pointer;
    letter-spacing:0.2ch;
  }

  .login_card .form-group button:hover {
    background: #1D60F6;
  }

  .login_card .group_button {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login_card .group_button button {
    background: #009F7F;
    margin-bottom: 25px;
    border: none;
    color: #ffff;
    font-weight: 600;
    cursor: pointer;
    letter-spacing:0.2ch;
  }

  .login_card .group_button button:nth-child(1):hover {
    background: #00C68F;
  }

  .login_card .group_button button:nth-child(2):hover {
    background: #9CA3AF;
  }
  
  .login_card .group_button button:nth-child(2) {
    background: #6B7280;
  }

  .login_card .footer{
    display: flex;
    justify-content: center;
    font-size: 14px;
  }

  @media (max-width:840px) { 
  .login_card {
      width: 90% !important;
      margin-top: 30px;
      margin-bottom: 50px;
    }
  }

  @media (max-width:1280px) { 
    .login_card {
      width: 40% ;
    }
  }
`