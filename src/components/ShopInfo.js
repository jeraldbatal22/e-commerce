import styled from 'styled-components'
import Furniture from '../assets/Furniture.png'
import InstagramIcon from '@mui/icons-material/Instagram';
// import { InstagramIcon } from '@material-ui/icons';
import React from 'react'

const ShopInfo = () => {
  return (
    <ShopInfoContainer>
      <div className="shopHeader">
        <img src={Furniture} alt="" />
        <h3>Furniture Shop</h3>
        <p>The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.</p>
        <button>Read more</button>
        <p><a href="https://www.instagram.com/" ><InstagramIcon /></a></p>
      </div>
      <hr></hr>
      <div className="shopDetails">
        <label>Adress</label>
        <p>588 Finwood Road, New Jersey, East Dover, 08753, USA</p>
        <label>Phone</label>
        <p>21342121221</p>
        <label>Website</label>
        <div>
          <p>https://redq.io/</p>
          <button>Visit This Site</button>
        </div>
      </div>
    </ShopInfoContainer>
  )
}

export default ShopInfo

const ShopInfoContainer = styled.div`
  display: flex;
  flex: 20%;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 22.75px;
  img {
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    height: 160px;
    width: 160px;
  }

  p {
    color:gray;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p a {
    color:gray;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 15px;
  }

  button {
    font-size: 14px;
    background: none;
    border: none;
    font-weight: 700;
    color: #1877F2;
    cursor: pointer;
    margin-bottom: 20px;
  }
  /* p {
    width: 10%;
  } */

  .shopHeader {
    text-align: center;
  }

  .shopDetails  {
    margin: 30px 15px 15px 15px ;
    line-height: 20px;
  }

  .shopDetails p {
    font-weight:  400;
    margin-top: 15px;
  }

  .shopDetails  label {
    font-size:14px;
    font-weight: 600;
    color:rgb(31, 41, 55);
  }

  .shopDetails div {
    display: flex;
    justify-content: space-between;
  }

  hr {
    color: #E5E7EB;
  }

  @media (max-width:1280px) { 
    display: none;
  }

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`