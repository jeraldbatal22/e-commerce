import { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Item from './CartItem';
import React from 'react'


const CartButton = ({ carts, showCartModal, cancelCartModal, isShowModal, setIsShowModal }) => {

  let message = 0
  carts.map((val) => {
    return message = `${val.price * carts.length}`
  })

  return (
    <CartContainer>
      {
        isShowModal ?
          <div className="modal">
            <div className="backdrop" onClick={cancelCartModal} />
            <div className="modal-content">
              <div className="header_modal">
                <h1 ><ShoppingBagIcon className="shop-icon" />Items</h1>
                <CloseIcon className="close" onClick={cancelCartModal} />
              </div>
              <hr></hr>
              {
                carts.map((item, index) => {
                  return <Item item={item} key={index} />
                })
              }
              <div className="checkout-btn">
                <button className="checkout"> <p>Checkout</p> <strong> $ 450.00</strong></button>
              </div>
            </div>
          </div>
          :
          <div className="item_button">
            <div className="item_button_body" onClick={showCartModal}>
              <ShopIcon className="shop-icon" />
              <div className="item_count"><strong>{carts.length}</strong>  <p>Item('s')</p></div>
              <strong>{message} PHP</strong>
            </div>
          </div>
      }


    </CartContainer>
  )
}

export default CartButton

const CartContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  .item_button {
    font-family: 'Open Sans', sans-serif;
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
    border: none;
    color:#ffff;
    font-size:14px;
  }

  .item_button_body:hover {
    padding: 10px 35px;
  }

  .item_button_body {
    font-family: 'Open Sans', sans-serif;
    border-radius: 7px;
    transition: 0.4s;
    padding: 10px 10px;
    background:#1597E5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item_button_body .item_count strong {
    margin-right: 10px;
  }

  .item_button_body > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: fixed;
    width: 25%;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    background: #ffff;

  }

  .backdrop {
    position: fixed;
    width: 75%;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .modal-content {
    overflow-y: scroll;
    height: 100vh;
  }

  .modal-content .header_modal {
    padding: 15px 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    position: sticky;
    background:#ffff;
    border-bottom: 1px solid black;
    top: 0;
  }

  .modal-content .close {
    cursor: pointer;
    padding: 12px;
    color:#9CA3AF;
    background: #F3F4F6;
    font-size: 40px;
    border-radius: 999px;
  }

  .checkout-btn {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    /* justify-content: center; */
    position: fixed;
    bottom: 0;
    padding: 15px 20px;
  }

  .checkout-btn button {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 20px;
    margin-bottom: 10px;
    border-radius: 500px;
    border: none;
    background: #1877F2;
    font-size: 18px;
    cursor: pointer;
    color: #ffff;
    font-family: 'Open Sans', sans-serif;
  }

  .checkout-btn button:hover {
    background: #1D8BF6;
  }

  @media (max-width:768px) { 
    .checkout-btn button{
      /* justify-content: center; */
      font-size: 15px !important;
    }

    .checkout-btn {
      width: 100% !important;
    }

    .item_button {
      display: none !important;
    }

    .modal {
      width: 100% !important;
    }

    .backdrop  {
      width: 0% !important;
    }
  }

  @media (max-width:1080px) { 
    .modal {
      width: 50%;
    }
    .backdrop  {
      width: 0%;
    }
    .checkout-btn {
      width: 50%;
    }
  }

  @media (max-width:1280px) { 
    .modal {
      width: 40%;
    }

    .checkout-btn {
      width: 40%;
    }

    .backdrop  {
      width: 60%;
    }

  } 
`