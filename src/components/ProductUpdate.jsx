import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import itemsImage from './imgs/smith.png'

const ProductUpdate = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState()
    const [cost, setCost] = useState()
    const [info, setInfo] = useState()
    const navigate = useNavigate()
    const goBack =() => {navigate(-1)}

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(response => {
                setTitle(response.data.title)
                setCost(response.data.cost)
                setInfo(response.data.info)})
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/products/' + id, {
                title,
                cost,
                info
            })

            .then(response => {
                console.log(response)
                navigate("/")})
            .catch(err => console.log(err))}

  return (
    <div style={{width:"320px", margin:"20px auto"}}>
        <h1 style={{color:"wheat", fontSize:"35pt", marginBottom:"-50px"}}>Update Item</h1>
        <img src={itemsImage} alt="items"/>
        <form onSubmit={updateProduct} style={{
                    backgroundColor:"#ecb46e",
                    padding:"20px",
                    margin:"0px 10px 20px 10px",
                    width:"260px",
                    borderRadius:"5px",
                    boxShadow:"3px 3px rgb(65, 46, 22)"}}>
            <p>
                <label style={{fontWeight:"bold"}}>Item: </label>
                <input type="text" name='title' value={title}
                style={{
                    padding:"7px",
                    margin:"7px 0px",
                    border:"none",
                    borderRadius:"5px",
                    width:"200px"}}
                    onChange={(e) => {setTitle(e.target.value)}}/>
            </p>
            <p>
                <label style={{fontWeight:"bold"}}>Cost: </label>
                <input type="text" name='cost' value={cost}
                style={{
                    padding:"7px",
                    margin:"7px 0px",
                    border:"none",
                    borderRadius:"5px",
                    width:"200px"}}
                onChange={(e) => {setCost(e.target.value)}}/>
            </p>
            <p>
                <label style={{fontWeight:"bold"}}>Info: </label>
                <input type="text" name="info" value={info}
                style={{
                    padding:"7px",
                    margin:"7px 0px",
                    border:"none",
                    borderRadius:"5px",
                    width:"200px"}}
                onChange={(e) => (setInfo(e.target.value))}/>
            </p>
            <button type='submit'
            style={{
                    padding:"5px 10px",
                    margin:"10px 10px 0px 16px",
                    borderRadius:"5px",
                    border:"none",
                    cursor:"pointer"}}>
                    Update</button>

            <button type='submit'
            style={{
                    padding:"5px 10px",
                    marginTop:"10px",
                    borderRadius:"5px",
                    border:"none",
                    cursor:"pointer"}}
                    onClick={goBack}>Cancel Changes</button>
        </form>
    </div>
  )
}

export default ProductUpdate