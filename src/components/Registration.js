import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router';

const Registration = ({ setisLogin }) => {
  const navigate = useNavigate()
  return (
    <LoginContainer>
      <div className="login_card">
        <h1 style={{ marginBottom: '30px', fontWeight: '600' }}><strong><strong>Online</strong><strong style={{ color: '#4285F4' }}>Shop</strong></strong></h1>
        <p style={{ marginBottom: '30px', color: 'gray' }}>By signing up, you agree to ourterms & policy</p>
        <div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="sample" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="sample@gmail.com" />
          </div>
          <div className="form-group">
            <label>Addresss</label>
            <input type="text" placeholder="Brgy Street City" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="form-group">
            <label>Password Confirmation</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="form-group">
            <button onClick={() => {
              setisLogin(true)
              navigate('/checkout')
            }}>Register</button>
          </div>
          <hr></hr>
          <div className="footer" style={{ marginTop: '30px' }}>
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default Registration

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