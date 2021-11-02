import styled from 'styled-components'

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
 justify-content: flex-end;

  .empty {
    flex: 0.23;
  }
  
  .pagination {
    flex:1;
    display: flex;
    justify-content: center;
  }

  .pagination button {
    padding: 5px 10px;
    margin: -40px 5px 30px 0px;
    cursor: pointer;
    background: #1877F2;
    color: #ffff;
  }

  @media (max-width:1280px) { 
    .empty {
      display: none;
    }
  }

  /* @media (max-width:280px) { 
    .pagination {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width:320px) { 
    .pagination {
    }
  } 
  @media (max-width:415px) { 
    .pagination {
      margin-left: 120px;

    }
  }

  @media (max-width:768px) { 
    .pagination {
      margin-left: 50px;
    }
    .empty {
      display: none;
    }
  }

  @media (max-width:1024px) { 
    .pagination {
      margin-right: 120px;
    }
    .empty {
      display: none;
    }
  } */
  `