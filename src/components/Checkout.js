import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';

const Checkout = () => {
  return (
    <>

      <CheckoutContainer>
        <LeftCheckout>
          <div className="card">
            <div className="card_1">
              <div>
                <h1><strong>1</strong> Contact Number</h1>
              </div>
              <div className="card_button">
                <AddIcon className="add_icon" />
                <button>Update</button>
              </div>
            </div>
            <div className="card_1_info">
              <p>19365141641631</p>
            </div>
          </div>

          <div className="card">
            <div className="card_1">
              <div>
                <h1><strong>1</strong> Billing Address</h1>
              </div>
              <div className="card_button">
                <AddIcon className="add_icon" />
                <button>Add</button>
              </div>
            </div>
            <div className="card_1_info">
              <p>2148 Straford Park, KY, Winchester, 40391, United States</p>
            </div>
          </div>

          <div className="card">
            <div className="card_1">
              <div>
                <h1><strong>1</strong> Shipping Address</h1>
              </div>
              <div className="card_button">
                <AddIcon className="add_icon" />
                <button>Add</button>
              </div>
            </div>
            <div className="card_1_info">
              <p>90 min express delivery</p>
            </div>
          </div>

          <div className="card">
            <div className="card_1">
              <div>
                <h1><strong>1</strong> Delivery Schedule</h1>
              </div>
              <div className="card_button">
                <AddIcon className="add_icon" />
                <button>Add</button>
              </div>
            </div>
            <div className="card_1_info">
              <p>90 min express delivery</p>
            </div>
          </div>

        </LeftCheckout>

        <RightCheckout>
          <div>
            <h2>Your Order</h2>
          </div>
          <div className="items">
            <span>1 x Brown Hardwood Double Bed | 1 pc(s)</span>
            <span>$220.00</span>
          </div>
          <div className="items">
            <span>1 x Brown Hardwood Double Bed | 1 pc(s)</span>
            <span>$220.00</span>
          </div>
          <div className="items">
            <span>1 x Brown Hardwood Double Bed | 1 pc(s)</span>
            <span>$220.00</span>
          </div>
          <hr></hr>
          <div className="items_total">
            <div>
              <span>Subtotal</span>
              <span>$220.00</span>
            </div>
            <div >
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div >
              <span>Estimated Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="div_button">
            <button>Check Availability</button>
          </div>
        </RightCheckout>
      </CheckoutContainer>
    </>

  )
}

export default Checkout

const CheckoutContainer = styled.div`
  font-family: "Open Sans", system-ui, sans-serif;
  width: 54%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:50px auto;
  height: 90vh;

  @media (max-width:840px) { 
    width: 85% !important;
  }
`

const LeftCheckout = styled.div`
  flex:50%;
  margin-right: 20px;
  > .card {
    background: #ffff;
    margin: 15px 0px;
    padding: 35px;
  }
  

  > div .card_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .card_1 h1 {
    font-size: 20px;
  }

  .card_1 h1 strong {
    background:#1877F2 ;
    padding: 5px 14px;
    border-radius: 50%;
    font-size: 16px;
    color: #ffff;

  }
  

  > div .card_1_info {
    display: flex;
    border: 1px solid #1877F2;
    border-radius: 7px;
    width: 40%;
    padding: 14px;
  }

  @media (max-width:840px) { 
  margin-right: 0px;
    > div .card_1_info {
      width: 100% !important;
    }
  }

  @media (max-width:1280px) { 
    > div .card_1_info {
      width: 80% !important;
    }
  }

  > div .card_1_info p {
    font-size: 14px;
    font-weight: 600;
  }

  .card .card_button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .card .card_button button {
    border: none;
    background: none;
    color: #1877F2;
    font-size: 14px;
    font-weight: 600;
  }

  .card .card_button .add_icon {
    color: #1877F2;
    font-weight: 600;
    font-size: 16px;
  }

`

const RightCheckout = styled.div`
  flex:30%;
  margin-left: 20px;
  > div {
    margin: 15px 0px;
    padding: 15px;
    font-size: 14px;
    color: gray;
  }
  > div > h2 {
    text-align:center;
  }

  .items {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .items_total > div {
    display: flex;
    justify-content: space-between;
  }

  .items_total > div > span {
    margin-bottom: 20px;
  }

  .div_button {
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }
  .div_button button {
    font-family: "Open Sans", system-ui, sans-serif;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    width: 100%;
    padding: 15px 15px;
    border: none;
    background: #1877F2;
    color: #fff;
    border-radius: 7px;
    cursor: pointer;
  }
  
  .div_button button:hover {
    background: #1D8BF6;
  }

  @media (max-width:840px) { 
  margin-left: -20px;
    > div .card_1_info {
      width: 100% !important;
    }
  }
`