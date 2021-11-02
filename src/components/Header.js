import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const Header = () => {
  const [isShow, setIsShow] = useState(false)
  const showMenu = () => {
    setIsShow(!isShow)
  }

  return (
    <HeaderContainer>
      <h1><strong><strong className="pick">Online</strong><strong className="bazaar">Shop</strong></strong></h1>
      <ul className="maxUl">
        <li>Shops</li>
        <li>Offers</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li><button>Join</button></li>
        <div onClick={showMenu} className="hamburger">
          {
            isShow ? <CloseIcon /> : <MenuIcon />
          }
        </div>
      </ul>
      {
        isShow &&
        <ul className="minUl">
          <li>Shops</li>
          <li>Offers</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      }
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.nav`
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  display: flex;
  justify-content:space-between;
  background: #ffff;

  h1 {
    margin:10px;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    margin:10px;
    list-style: none;
  }
  li {
    margin-right: 60px;
    color: gray;
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
  }

  .show {
    display: none ;
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

  li:hover {
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

  @media (max-width:780px) { 
    .maxUl li {
      display: none;
    }
    .show {
      display: block;
    }
    .hamburger {
      display: block;
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
      /* display: flex;
      justify-content: space-between; */
      margin: 25px;
    }
  }
`