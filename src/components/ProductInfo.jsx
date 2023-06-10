import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'
import itemImage from './imgs/merchant.png'


const ProductInfo = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const goBack =() => {navigate(-1)}

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(response => {
            console.log(response.date)
            setProduct(response.data)
            })
            .catch(err => console.log(err))
        }, [])

  return (
    <div style={{width:"320px", margin:"20px auto"}}>
        <h1 style={{color:"wheat", fontSize:"35pt", marginBottom:"-85px"}}>Item Details</h1>
        <img src={itemImage} alt="items"/>
        <div style={{
            marginTop:"100px,",
            marginBottom:"40px",
            backgroundColor:"#ecb46e",
            padding:"30px 20px",
            width:"300px",
            height:"200px",
            borderRadius:"5px",
            boxShadow:"3px 3px rgb(65, 46, 22)"}}>
                <p style={{fontSize:"16pt", fontWeight:"bold"}}>{product.title}</p>
                <p>Cost: ${product.cost}</p>
                <p>Info: {product.info}</p>
                <button className="backButton" style={{
                    padding:"5px 10px",
                    marginTop:"10px",
                    borderRadius:"5px",
                    border:"none",
                    cursor:"pointer"}}
                    onClick={goBack}>Back to Shop</button>

                <img src="" alt="" />
        </div>
    </div>
  )
}

export default ProductInfo