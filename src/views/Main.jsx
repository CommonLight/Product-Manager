import React, {useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {

    const [product, setProduct] = useState([])

    const removeFromDom = productID => {
      setProduct(product.filter(product => product._id != productID))
    }

  return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/>
        <br /> <hr /> <br />
        <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main