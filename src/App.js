import './App.css';
import styled from 'styled-components'
import ShopInfo from './components/ShopInfo';
import ItemList from './components/ItemList';
import Header from './components/Header';
// import Footer from './components/Footer';
import Couch1 from './assets/couch1.png'
import Hardwoods from './assets/Hardwoods.png'
import Mahagony from './assets/Mahogany.png'
import Oak from './assets/Oak.png'
import Pagination from './components/Pagination';
import { useState } from 'react';
import Cart from './components/Cart';

const data = [
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Couch1
  },
  {
    title: 'Brown Hardwood Double Bed',
    amount: 250.00,
    img: Hardwoods
  },
  {
    title: 'Deluxe Mahagony Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Supreme Oak Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Partex Coushoned Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Grim Elm wood Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Vince Ottoman Double Bed',
    amount: 250.00,
    img: Hardwoods
  },
  {
    title: 'Cedar Double Bed',
    amount: 250.00,
    img: Couch1
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Couch1
  },
  {
    title: 'Brown Hardwood Double Bed',
    amount: 250.00,
    img: Hardwoods
  },
  {
    title: 'Deluxe Mahagony Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Supreme Oak Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Partex Coushoned Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Grim Elm wood Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Vince Ottoman Double Bed',
    amount: 250.00,
    img: Hardwoods
  },
  {
    title: 'Cedar Double Bed',
    amount: 250.00,
    img: Couch1
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Oak
  },
  {
    title: 'Vince Ottoman Double Bed',
    amount: 250.00,
    img: Hardwoods
  },
  {
    title: 'Cedar Double Bed',
    amount: 250.00,
    img: Couch1
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Mahagony
  },
  {
    title: 'Ash Double Bed',
    amount: 250.00,
    img: Oak
  }
]

function App() {
  const [currenPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)

  const indexOflastPost = currenPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOflastPost)


  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <Header />
      <ShopInfoContainer>
        <ShopInfo />
        <ItemList currentPosts={currentPosts} />
        <Cart />
      </ShopInfoContainer>
      <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} />
      {/* <Footer /> */}
    </>
  );
}

export default App;

const ShopInfoContainer = styled.div`
  display: flex;
  margin: 20px;
`