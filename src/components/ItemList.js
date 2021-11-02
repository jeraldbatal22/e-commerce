import styled from 'styled-components'

const ItemList = ({ currentPosts }) => {

  return (
    <>
      <ItemListContainer>

        {
          currentPosts.map((item, index) => {
            return (
              <div key={index} className="fulldetails">
                <img src={item.img} alt="" height="280" width="305" />
                <div className="details">
                  <strong>{item.title}</strong>
                  <p>${item.amount}.00</p>
                  <div className="button">
                    <button>Add To Cart</button>
                    <button>Checkout</button>
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
  flex: 0.92;
  margin: 0px 30px 20px 50px ;
  /* overflow-y: scroll; */
 

  img {
    /* margin-bottom: -65px; */
  }

  .fulldetails {
    cursor: pointer;
    border-radius: 6px;
    background: #ffff;
    padding: 10px;
    margin: 0px 0px 20px 0px;

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

  }

  .details button:hover {
    background-color: #1D8BF6;
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