import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    console.log("id", id)

    useEffect(() => {
        fetchData()
    }, [])

    const [product, setProduct] = useState({})
    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
    }
    console.log("product", product)
    return (
        <div>
            <h1>TITLE: {product?.title} </h1>
            <h1>PRICE : {product?.price} </h1>
            <h1>IMAGE</h1>
        </div>
    )
}

export default ProductDetails