import './App.css';
import styled from 'styled-components'
import ShopInfo from './components/ShopInfo';
import ItemList from './components/ItemList';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';
import Cart from './components/CartButton';
import UserProfile from './components/UserProfile';
import axios from 'axios';
import React from 'react'

import {
  Route,
  Routes
} from "react-router-dom";
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
      <Header carts={carts.length} showCartModal={showCartModal} />
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