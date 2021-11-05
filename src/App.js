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
import { useState, useEffect } from 'react';
import Cart from './components/CartButton';
import UserProfile from './components/UserProfile';
import axios from 'axios';
import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Switch } from 'react-router'
function App() {
  const [data, setData] = useState([])

  const [currenPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const indexOflastPost = currenPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOflastPost)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const [carts, setCarts] = useState([])
  const [isShowProfile, setIsShowProfile] = useState(false)

  const addToCart = (item) => {
    setCarts([...carts, { ...item }])
  }

  const [isShowModal, setIsShowModal] = useState(false)

  const showCartModal = () => {
    setIsShowModal(true)
  }

  const cancelCartModal = () => {
    setIsShowModal(false)
  }

  const fetchProduct = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err)
      })
    setData(res.data)
    return res
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <Header carts={carts.length} isShowProfile={isShowProfile} showCartModal={showCartModal} />
      <Cart carts={carts} showCartModal={showCartModal} cancelCartModal={cancelCartModal} setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      <Routes>
        <Route exact path="/" element={
          <>
            <ShopInfoContainer>
              <ShopInfo />
              <ItemList currentPosts={currentPosts} addToCart={addToCart} />
            </ShopInfoContainer>
            <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} />
            <Cart carts={carts} showCartModal={showCartModal} cancelCartModal={cancelCartModal} setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
          </>
        }>
        </Route>
        <Route path="/user_profile" element={
          <>
            <UserProfile />
          </>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;

const ShopInfoContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 20px;
`