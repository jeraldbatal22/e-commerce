import { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Item from './Item';

const Cart = () => {
  const [isShow, setIsShow] = useState(false)

  const showCart = () => {
    setIsShow(true)
  }

  const cancelCart = () => {
    setIsShow(false)
  }

  return (
    <CartContainer>
      {
        isShow ?
          <div className="modal">
            <div className="modal-content">
              <CloseIcon className="close" onClick={cancelCart} />
              <h1><ShoppingBagIcon className="shop-icon" />Items</h1>
              <hr></hr>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <div className="checkout-btn">
                <button className="checkout"> <p>Checkout</p> <strong> $ 450.00</strong></button>
              </div>
            </div>
          </div>
          :
          <button onClick={showCart} className="item_button"><p><ShopIcon className="shop-icon" /> 0 Item</p><strong>$0.00</strong></button>
      }


    </CartContainer>
  )
}

export default Cart

const CartContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  
  .item_button {
    font-family: 'Open Sans', sans-serif;
    padding:10px 15px;
    cursor: pointer;
    position: fixed;
    right: 0;
    border-radius: 5px;
    font-weight: 600;
    background:#1877F2;
    border: none;
    color:#ffff;
  }

  h1 {
    color: #1D246E;
  }

  .item_button p {
    display: flex;
    align-items: center;
    margin: 5px;
  }

  .item_button p .shop-icon {
    margin-right: 9px;
  }
  right: 0;
  /* height: 100vh; */
  display: flex;
  align-items: center;

  .modal {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    overflow-y: scroll;
    background: #ffff;
    height: 100vh;
    max-width: 100%;
    width: 25%;
    float: right;
    padding:30px;
  }

  .modal-content hr {
    margin: 20px 0px;
  }
  div .close {
    float: right;
    cursor: pointer;
    padding: 12px;
    color:#9CA3AF;
    background: #F3F4F6;
    font-size: 40px;
    border-radius: 999px;
  }

  div .close:hover {
    background: #1877F2;
    color: #ffff;
  }

  .checkout-btn {
    position: fixed;
    bottom: 0;
  }

  .checkout-btn button {
    width: 100%;
    display: flex;
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


  .checkout-btn button strong {
    color: #1877F2;
    background: #ffff;
    padding: 10px 15px;
    border-radius: 500px;
  }

  .checkout-btn {
    display: flex;
    justify-content: center;
    padding: 2;
    width: 22%;
  }
`