import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Products = () => {
    const [getProducts, setGetProducts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return setGetProducts(data)
            })
    },[])
    
 
    
  return (
    <div>
        <ul>
            {getProducts.map(res => (
                <li> { res.id } </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Products