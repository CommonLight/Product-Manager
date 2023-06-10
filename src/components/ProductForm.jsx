import React, {useState} from 'react'
import axios from 'axios'
import signImage from "./imgs/wood-sign-sm2.png"

const ProductForm = (props) => {
    const {product, setProduct} = props
    const [title, setTitle] = useState("")
    const [cost, setCost] = useState("")
    const [info, setInfo] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            title,
            cost,
            info
        })
        .then(response => {
            console.log(response)
            console.log(response.data)
            setProduct([...product, response.data])})
        .catch(err => console.log(err))
    }

    return (
        <div style={{margin:"30px auto", width:"300px"}}>
            <form onSubmit = {submitHandler}>

                <img src={signImage} alt="sign"/>

                <div style={{backgroundColor:"#ecb46e", padding:"10px", margin:"10px 0px", borderRadius:"5px", boxShadow:"3px 3px rgb(65, 46, 22)"}}>

                    <label htmlFor="title" style={{
                        fontWeight:"bold",
                        fontSize:"16pt"}}>
                        Item: </label>

                    <input style={{
                        padding:"7px",
                        margin:"7px 0px",
                        border:"none",
                        borderRadius:"5px",
                        width:"200px"}}
                        type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div style={{backgroundColor:"#ecb46e", padding:"10px", margin:"20px 0px", borderRadius:"5px", boxShadow:"3px 3px rgb(65, 46, 22)"}}>
                            
                    <label htmlFor="price" style={{
                        fontWeight:"bold",
                        fontSize:"16pt"}}>
                        Cost: </label>

                    <input style={{
                        padding:"7px",
                        margin:"7px 0px",
                        border:"none",
                        borderRadius:"5px",
                        width:"200px"}}
                        type="text" onChange={(e) => setCost(e.target.value)}/>
                </div>

                <div style={{backgroundColor:"#ecb46e", padding:"10px", margin:"10px 0px", borderRadius:"5px", boxShadow:"3px 3px rgb(65, 46, 22)"}}>

                    <label htmlFor="info" style={{
                        fontWeight:"bold",
                        fontSize:"16pt",}}>
                        Info: </label>

                    <input style={{
                        padding:"7px",
                        margin:"7px 0px",
                        border:"none",
                        borderRadius:"5px",
                        width:"200px"}}
                        type="text" onChange={(e) => setInfo(e.target.value)}/>
                </div>

                <button style={{
                    backgroundColor:"#ecb46e",
                    border:"none",
                    borderRadius:"5px",
                    padding:"10px 25px",
                    fontSize:"16pt",
                    fontWeight:"bold",
                    cursor:"pointer",
                    boxShadow:"3px 3px rgb(65, 46, 22)", 
                    marginTop:"10px"}}>
                    Create</button>
            </form>
        </div>
    )
}

export default ProductForm