import styled from 'styled-components'
import React from 'react'

const Pagination = ({ pageNumbers, setCurrentPage }) => {
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber)
  }
  return (
    <PaginationContainer>
      <div className="empty"></div>
      <div className="pagination">
        {
          pageNumbers.map(number => (
            <button key={number} type="button" onClick={() => paginate(number)}>{number}</button>
          ))
        }
      </div>
    </PaginationContainer>
  )
}

export default Pagination

const PaginationContainer = styled.div`
  display: flex;
 justify-content: center;

 .empty {
    flex: 20%;
  }

  .pagination {
    flex:70%;
    display: flex;
    justify-content: center;
    position: sticky;
    bottom: 0;
    margin-bottom: 20px;
    z-index: 0;
  }

  .pagination button {
    padding: 10px 15px;
    margin: 0px 5px 0px 0px;
    cursor: pointer;
    background: #ffff;
    color: #1877F2;
    font-weight: 600;
    margin-bottom: 10px;
    border: none;
  }

  .pagination button:focus {
    color: #ffff;
    background-color: #1877F2;
  }

  .pagination button:hover {
    color: #ffff;
    background:#1877F2;
  }

  @media (max-width:1280px) { 
    .empty {
      display: none;
    }
  }
`