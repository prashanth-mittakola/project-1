import React, { useState,useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const SingleProduct = () => {
    const [product,setProduct] = useState({});
    const params = useParams();
    console.log(params);
    const history =useHistory();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{return response.json()})
        .then(product => {setProduct(product)});
    }, [params.id])

    return (
        <>
        <div className="container mx-auto mt-12">
            <button className="font-bold mb-12" onClick={()=>history.goBack()}>Back</button>
            <div className="flex">
                <img style={{maxHeight:"500px", maxWidth:"500px"}} src={product.image} alt="image" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <div className="text-md">category : <strong>{product.category}</strong></div>
                    <div className="font-bold mt-2">$ <span style={{color:"red"}}>{product.price} /-</span></div>
                    <p style={{maxWidth:"500px"}}>{product.description}</p>
                    <button className="mt-4 py-1 px-8 rounded-full font-bold bg-pink-400 hover:bg-pink-500">Add to cart</button>
                </div>
            </div>
        </div>

        {/* <div className="container mx-auto mt-12">
            <button className="font-bold mb-12" onClick={()=>history.goBack()}>Back</button>
            <div className="flex">
                <img style={{maxHeight:"500px", maxWidth:"500px"}} src="/images/peproni.png" alt="image" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <div className="text-md">category : <strong>{product.category}</strong></div>
                    <div className="font-bold mt-2">$ <span style={{color:"red"}}>{product.price} /-</span></div>
                    <p style={{maxWidth:"500px"}}>{product.description}</p>
                    <button className="mt-4 py-1 px-8 rounded-full font-bold bg-pink-400 hover:bg-pink-500">Add to cart</button>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default SingleProduct
