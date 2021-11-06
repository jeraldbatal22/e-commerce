import styled from 'styled-components'
import user from '../assets/user.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {

  return (
    <>

      <UserProfileContainer>
        <h1>User Profile</h1>
        <div className="userprofile_card">
          <div className="user_top_body">
            <div className="img">
              <img src={user} alt="" width="350" height="400" />
              <div className="upload-image">
                <label htmlFor="upload-photo">Upload Profile Picture</label>
                <input type="file" name="photo" id="upload-photo" />
              </div>
            </div>

            <div className="user">
              <div className="form-group">
                <label>Email</label>
                <input type="text" defaultValue="jerald@sample.com" />
              </div>
              <div className="form-group" >
                <label>Username</label>
                <input type="text" defaultValue="Jerald" />
              </div>
              <div className="form-group">
                <label>Firstname</label>
                <input type="text" defaultValue="Jerald" />
              </div>
              <div className="form-group">
                <label>Lastname</label>
                <input type="text" defaultValue="Batal" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" defaultValue="123456" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" defaultValue="123456" />
              </div>
              <div className="form-button">
                <button><Link to="/"> BACK </Link></button>
                <button> UPDATE </button>
              </div>
            </div>

          </div>
        </div>
      </UserProfileContainer>
    </>
  )
}

export default UserProfile

const UserProfileContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  width: 50%;
  margin-top: 50px;
  
  .userprofile_card {
    padding: 50px;
    background: #ffff;
    border-radius: 15px;
  }

  .userprofile_card .user_top_body {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
  }
  
 
  .user_top_body img {
    border-radius: 100%;
  }

  .user_top_body .upload-image {
   text-align:center;
   margin-top:15px ;
   /* Style as you please, it will become the visible UI component. */
  }

  .user_top_body .upload-image label {
    cursor: pointer;
    font-weight: 600;
    /* border: 2px solid; */
  }

  #upload-photo {
    display: none;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }


  .user_top_body .form-group {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
  font-family: 'Open Sans', sans-serif;

  }

  .user_top_body .form-group input {
    padding: 10px 15px;
    border: none;
    box-shadow: 0px 1px;
    
  }

  .user_top_body .form-button  {
    display: flex;
    justify-content: space-between;
  }

  > h1 {
    margin: 20px 0px;
    text-align:center;
    font-size: 3rem;
  }

  .user_top_body .form-button button {
    padding: 10px 15px;
    cursor: pointer;
    border: none;
  }

  @media (max-width:540px) { 
    width: 100%;

    img {
     display: none;
    }

    .userprofile_card {
      margin-top: 50px;
    }
  }

  @media (max-width:1080px) { 
    width: 95%;
    img {
    margin-bottom: 50px;
    }
    .userprofile_card {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }

  @media (max-width:1280px) { 

  }
 
`