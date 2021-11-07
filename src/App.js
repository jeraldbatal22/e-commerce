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
import Checkout from './components/Checkout';
import Login from './components/Login';
import PageNotfound from './components/PageNotfound';
import Registration from './components/Registration';
function App() {
  const [data, setData] = useState([])
  const [isLogin, setisLogin] = useState(false)

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
    const isExist = carts.find(data =>
      data.id === item.id
    )

    if (!isExist) {
      setCarts([...carts, { ...item, count: 1, total_price: 0 }])
    } else {
      carts.map(item => {
        if (item.id === isExist.id) {
          const item_count = item.count += 1
          item.total_price = item.price * item_count
          // item.count += 1
        }
      })
    }
    // ? 
    //   console.log('already have this item item')
    //   : carts.push(item)
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

      <Routes>

        {/* PUBLICE ROUTES */}

        <Route exact path="/" element={
          <>
            <ShopInfoContainer>
              <ShopInfo />
              <ItemList currentPosts={currentPosts} addToCart={addToCart} />
            </ShopInfoContainer>
            <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} />
            <Cart carts={carts} showCartModal={showCartModal} cancelCartModal={cancelCartModal} setIsShowModal={setIsShowModal} isShowModal={isShowModal} isLogin={isLogin} />
          </>
        }>
        </Route>
        <Route path="/:pageName" element={<PageNotfound />}></Route>

        {/* PROTECTED ROUTES REQUIRED LOGIN */}
        {
          isLogin ?
            <>
              <Route path="/checkout" element={<Checkout setisLogin={setisLogin} isLogin={isLogin} carts={carts} />}></Route>
              <Route path="/user_profile" element={<UserProfile isLogin={isLogin} />}></Route>
            </>
            :
            <>
              <Route path="/login" element={<Login setisLogin={setisLogin} />}></Route>
              <Route path="/registration" element={<Registration setisLogin={setisLogin} />}></Route>
            </>
        }
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