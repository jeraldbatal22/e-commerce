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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [checkout, setCheckout] = useState(null)

  const addToCart = (item) => {
    const isExist = carts.find(data =>
      data.id === item.id
    )

    if (!isExist) {
      toast.success(`Successfully add to cart ${item.title}`)
      setCarts([...carts, { ...item, count: 1 }])
    } else {
      setCarts(carts.map(cart =>
        cart.id === item.id ? { ...isExist, count: cart.count + 1 } : cart
      ))
      console.log(item)
      console.log(isExist)
    }

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
      <Header carts={carts.length} showCartModal={showCartModal} isLogin={isLogin} />
      <ToastContainer classname="alert_message" />
      <Routes>

        {/* PUBLICE ROUTES */}

        <Route exact path="/" element={
          <>
            <ShopInfoContainer>
              <ShopInfo />
              <ItemList currentPosts={currentPosts} addToCart={addToCart} isLogin={isLogin} checkout={checkout} setCheckout={setCheckout} />
            </ShopInfoContainer>
            <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} />
            <Cart
              carts={carts}
              showCartModal={showCartModal}
              cancelCartModal={cancelCartModal}
              setIsShowModal={setIsShowModal}
              isShowModal={isShowModal}
              isLogin={isLogin}
              setCarts={setCarts}
              setCheckout={setCheckout}
            />
          </>
        }>
        </Route>
        <Route path="/:pageName" element={<PageNotfound />}></Route>

        {/* PROTECTED ROUTES REQUIRED LOGIN */}
        {
          isLogin ?
            <>
              <Route path="/checkout" element={<Checkout setisLogin={setisLogin} isLogin={isLogin} carts={carts} checkout={checkout} />}></Route>
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
  margin: 20px;
`