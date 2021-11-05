import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ carts, showCartModal }) => {
  const [isShow, setIsShow] = useState(false)
  const showMenu = () => {
    setIsShow(!isShow)
  }

  return (
    <HeaderContainer>
      <h1><strong><strong className="pick">Online</strong><strong className="bazaar">Shop</strong></strong></h1>
      <ul className="maxUl">
        <li>
          <Link to="/" >
            Shops
          </Link>
        </li>
        <li>Offers</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li style={{ display: 'flex' }} className="cart_count" onClick={showCartModal}> <p style={{ marginRight: '10px', padding: '0px 7px ', borderRadius: '999px', fontWeight: '900', color: 'black' }}>{carts}</p>Carts</li>
        <Link to="/user_profile" >
          <li>Profile</li>
        </Link>
        <li><button>Join</button></li>
        <div className="menuIcon"> <p onClick={showCartModal}>{carts}</p></div>

        <div onClick={showMenu} className="hamburger">
          {
            isShow ? <CloseIcon /> : <MenuIcon />
          }
        </div>
      </ul>
      {
        isShow &&
        <ul className="minUl">
          <li>
            <Link to="/" >
              Shops
            </Link>
          </li>
          <li>Offers</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li onClick={showCartModal}>Carts</li>
          <li>
            <Link to="/user_profile" >
              Profile
            </Link></li>
        </ul>
      }
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  display: flex;
  justify-content:space-between;
  background: #ffff;

  h1 {
    margin:10px 0px;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul a {
    text-decoration: none;
    color: black;
  }
  li {
    margin-right: 60px;
    color: gray;
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
    text-decoration: none;
  }

  li a {
    color: gray;
  }

  ul li p:hover {
    color: #00C58E !important;
  }

  ul li {
    cursor: pointer;
  }

  .show {
    display: none ;
  }

  .menuIcon {
    display: none;
  }

  .hamburger {
    display: none ;
  }

  .close {
    display: none;
  }

  .minUl {
    display: none;
  }

  li:hover, li a:hover {
    color: #00C58E;
    cursor: pointer;
    font-weight: 400;
  }

  button {
    padding: 10px 13px;
    border-radius: 4px;
    border: none;
    background: #1877F2;
    color: #ffff;
    font-family: 'Open Sans', sans-serif;
  }

  strong {
    font-size: 35px;
  }

  strong .pick {
    color: #1D246E;
  }

  strong .bazaar {
    color: #1877F2;
  }

  @media (max-width:977px) { 
    .maxUl li, .cart_count {
      display: none !important;
    }
    .show {
      display: block;
    }
    .hamburger {
      display: block;
      cursor: pointer;
    }
    .minUl {
      position: absolute;
      margin-top: 80px;
      flex-direction: column;
      width: 100%;
      display: flex;
      background: #ffff;
      margin-left: -20px;
    }

    .minUl li {
      margin: 25px;
    }

    .menuIcon {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menuIcon p {
      color: #ffff;
      font-weight: 700;
      padding: 5px 12px;
      background:#1877F2 ;
      border-radius: 100%;
      margin-right: 5px;
      font-size: 15px;
    }
  }

`