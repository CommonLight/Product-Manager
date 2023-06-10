import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProductList = (props) => {
    
    const {removeFromDom, product, setProduct} = props

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then(response => {removeFromDom(productID)})
            .catch(err => console.log(err))}

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
        .then((response) => {setProduct(response.data)})
        .catch((err) => {console.log(err)})}, [])

    return (
    <div className='wrapper'>
        <div style={{margin:"30px auto", width:"960px", display:"flex", flexWrap:"wrap"}}>
            {product.map((product, index) => {
                return <div key={index} style={{
                    backgroundColor:"#ecb46e",
                    padding:"20px",
                    margin:"0px 10px 20px 10px",
                    width:"260px",
                    borderRadius:"5px",
                    boxShadow:"3px 3px rgb(65, 46, 22)"}}>
                    
                    <p style={{fontSize:"16pt", fontWeight:"bold"}}>{product.title}</p>
                    <p style={{fontWeight:"bold", fontSize:"14pt"}}>Price: ${product.cost}</p>
                    <p>{product.info}</p>

                    <Link to={`/products/${product._id}`}>
                        <button style={{
                        padding:"5px 10px",
                        margin:"20px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        cursor:"pointer"}}>Details</button></Link>
                        
                    <Link to={"/products/edit/" + product._id}>
                        <button style={{
                        padding:"5px 10px",
                        margin:"0px 5px",
                        borderRadius:"5px",
                        border:"none",
                        cursor:"pointer"}}>Modify</button></Link>

                    <button style={{
                        padding:"5px 10px",
                        margin:"0px 5px",
                        borderRadius:"5px",
                        border:"none",
                        cursor:"pointer"}}
                        onClick={(e) => {deleteProduct(product._id)}}>Remove</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductList