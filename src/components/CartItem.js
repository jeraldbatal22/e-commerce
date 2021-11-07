import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const CartItem = ({ item, carts, setCarts }) => {

  const addQuantity = () => {
    const isExist = carts.find(data =>
      data.id === item.id
    )

    setCarts(carts.map(item =>
      item.id === isExist.id ?
        { ...isExist, count: item.count += 1 }
        :
        item
    ))
  }

  const minusQuantity = () => {
    const isExist = carts.find(data =>
      data.id === item.id
    )

    if (item.count === 1) {
      setCarts(carts.filter(cart => cart.id !== item.id))
    } else {
      setCarts(carts.map(item =>
        item.id === isExist.id ?
          { ...isExist, count: item.count -= 1 }
          : item
      ))
    }
  }

  return (
    <MainItemContainer>
      <ItemContainer>
        <div className="quantity">
          <AddIcon className="add" onClick={addQuantity} />
          <strong>{item.count}</strong>
          <RemoveIcon className="remove" onClick={minusQuantity} />
        </div>
        <div className="image">
          <img src={item.image} alt="" height="80" width="80" />
        </div>
        <div className="details">
          <strong style={{ fontSize: "13px", fontWeight: "700" }}>{item.title.split(' ')[0] + " " + item.title.split(' ')[1]}</strong>
          <strong className="price">{item.price * 50} PHP</strong>
          <strong>{item.count} X 1 pc(s)</strong>
        </div>
        <div className="total-price">
          <strong>{(item.price * 50) * item.count} PHP</strong>
        </div>
        <div className="remove-to-cart">
          <CloseIcon className="close-to-cart" />
        </div>
      </ItemContainer>
      <hr></hr>
    </MainItemContainer>
  )
}

export default CartItem

const MainItemContainer = styled.div`
  margin-bottom: 75px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top:20px;
  margin-bottom:15px;
  padding: 15px 20px;

  > div {
    font-size: 14px;
  }

  .quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 10px;
    background: #F3F4F6;
    border-radius: 500px;
  }

  .quantity .add, .quantity .remove {
    font-size: 14px !important;
    cursor: pointer;
  }

  .image {
    display: flex;
    align-items: center;
    margin: 0px 20px;
  }

  .details {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
  }

  .total-price {
    display: flex;
    align-items: center;
  }

  .remove-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-to-cart {
 
    text-align:center;
    color:#9CA3AF;
    cursor: pointer;
    padding: 6px;
    font-size: 30px;
  }

  .close-to-cart:hover {
    color: red;
    background: #F3F4F6;
    padding: 6px;
    border-radius: 999px;
    font-size: 30px;
  }
  
  /* .quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 12px;
    background: #F3F4F6;
    border-radius: 500px;
  }

  .image {
    display: flex;
    align-items: center;
    margin: 0px 25px;
  }

  .quantity .add, .quantity .remove, .quantity strong {
    margin:5px 0px;
    font-size: 15px;
  }

  .quantity .add, .quantity .remove {
    cursor: pointer;
  }

  .details {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column; 
  }

  .details strong {
    margin: 10px 0px;
    font-size:13px;
  }

  .details .price {
    color: #1D246E;
  }
  
  .total-price {
    display: flex;
    align-items: center;
    margin: 0px 25px;
  }

  .remove-to-cart {
    display: flex;
    align-items: center;
  }
  
  .close-to-cart {
    color:#9CA3AF;
    cursor: pointer;
    padding: 6px;
    font-size: 30px;
  }

  .close-to-cart:hover {
    color: red;
    background: #F3F4F6;
    padding: 6px;
    border-radius: 999px;
    font-size: 30px;
  }

  @media (max-width:540px) { 

  } */
`