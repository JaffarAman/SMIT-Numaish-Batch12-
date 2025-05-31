import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {

    useEffect(() => {
        fetchData()
    }, [])

    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
    }
    console.log("products", products)

    return (
        <>
            <div>ProductPage</div>

            {
                products.map((product, index) => (
                    <div>
                        <Link to={`/productdetails/${product.id}`} >
                            <h1>  {index + 1} {product.title} </h1>
                        </Link>
                        <h1> Price {product.price} </h1>
                        <hr />
                    </div>

                )

                )
            }


        </>
    )
}

export default ProductPage