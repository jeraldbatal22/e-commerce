import styled from 'styled-components'
import React from 'react'

const ItemList = ({ currentPosts, addToCart }) => {
  return (
    <>
      <ItemListContainer>

        {
          currentPosts.map((item, index) => {
            return (
              <div key={index} className="fulldetails">
                <div className="detail">
                  <img src={item.image} alt="" height="200" width="300" />
                  <div className="details">
                    <strong style={{ width: '10px' }}>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</strong>
                    <p>{item.price * 50} PHP </p>
                    <div className="button">
                      <button onClick={() => addToCart(item)}>Add To Cart</button>
                      <button>Checkout</button>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
        }

      </ItemListContainer>

    </>
  )
}

export default ItemList

const ItemListContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 70%;
  margin: 0px 30px 0px 20px ;
  /* overflow-y: scroll; */
 

  img {
    /* margin-bottom: -65px; */
  }

  .fulldetails {
    cursor: pointer;
    border-radius: 6px;
    padding: 10px;
    margin: 0px 0px 20px 0px;

  }

  .fulldetails .detail {
    background: #ffff;
  }

  .fulldetails .details {
    text-align: center;
  }

  .details strong {
    font-size: 14px;
    font-weight:600;
    line-height: 20px;
    color: black;
    font-family: 'Open Sans', sans-serif;

  }
  
  .details p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400px;
    line-height: 20px;
    font-family: 'Open Sans', sans-serif;

  }

  .details .button {
    display: flex;
    justify-content: space-around;
  }

  .details button {
    padding: 10px 15px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    background-color: #1877F2;
    color: #ffff;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    font-family: 'Open Sans', sans-serif;
    transition: 0.4s;
  }

  .details button:hover {
    background-color: #1597E5;
    padding: 13px 18px;
  }

  @media (max-width:840px) { 
   justify-content:center;
   .fulldetails {
     width: 100%;
     text-align: center;
   }
  }

  @media (max-width:415px) { 
    img {
      height: 180px;
      width: 180px;
    }

    .details button {
      padding: 10px 10px;
    }
  }

  @media (max-width:1280px) { 
    justify-content: center;
  
    img {
      height: 250px;
      width: 250px;
    }
  }

  @media (max-width:280px) { 
    img {
      height: 130px;
      width: 130px;
    }

    .details button {
      padding: 5px 5px;
      font-size: 10px;
    }
  }
 
`