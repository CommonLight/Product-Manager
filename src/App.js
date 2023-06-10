import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Main from './views/Main'
import ProductInfo from './components/ProductInfo'
import ProductUpdate from "./components/ProductUpdate"
import backgroundImage from "./components/imgs/wood-bkgd-2smd2.jpg"


function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${backgroundImage})`, padding:"15px 0px 200px 0px"}}>

      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default/>
          <Route element={<ProductInfo/>} path='/products/:id'/>
          <Route element={<ProductUpdate/>} path="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
