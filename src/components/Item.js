import styled from 'styled-components'
import Oak from '../assets/Oak.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

const Item = () => {
  return (
    <MainItemContainer>
      <ItemContainer>
        <div className="quantity">
          <AddIcon className="add" />
          <strong>1</strong>
          <RemoveIcon className="remove" />
        </div>
        <div className="image">
          <img src={Oak} alt="" height="100" width="80" />
        </div>
        <div className="details">
          <strong style={{ width: "80%", fontSize: "15px", fontWeight: "700", lineHeight: "20px" }}>Deluxe Mahagony Double Bed</strong>
          <strong className="price">$300.00</strong>
          <strong>1 X 1 pc(s)</strong>
        </div>
        <div className="total-price">
          <strong>$300.00</strong>
        </div>
        <div className="remove-to-cart">
          <CloseIcon className="close-to-cart" />
        </div>
      </ItemContainer>
      <hr></hr>
    </MainItemContainer>
  )
}

export default Item

const MainItemContainer = styled.div`
  margin-bottom: 55px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .quantity {
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
    /* justify-content: center; */
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
`