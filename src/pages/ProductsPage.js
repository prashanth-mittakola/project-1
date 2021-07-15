import React, {useState, useEffect, useContext } from 'react';
import Product from '../components/Product';
import { CartContext } from '../CartContext';

const ProductsPage = () => {

const {name} = useContext(CartContext);

const [products, setProducts] = useState([]);
useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{return res.json()})
    .then(data=>{setProducts(data)});
}, [])

    return (
        <>
        <div className="container mx-auto pb-24">
            <h1 className="text-lg my-8 font-bold">Products {name}</h1>
            {/* <h1 className="text-lg my-8 font-bold">Products</h1> */}
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((product)=>{return <Product key={product.id} product={product} />})
                }
                {/* <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product /> */}
            </div>
        </div>
        </>
    )
}

export default ProductsPage