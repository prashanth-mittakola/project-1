import { tSTypeAliasDeclaration } from '@babel/types';
import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Product = (props) => {

    const [ isAdding, setIsAdding ] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;
    const addToCart = (e,product) => {

        let _cart = {...cart};
        
        if(!_cart.items){
            _cart.items={};
        }

        if(_cart.items[product.id]){
            _cart.items[product.id] += 1;
        }else{
            _cart.items[product.id] = 1
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        } 

        _cart.totalItems += 1; 
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)
        
        // console.log(product);

        // const cart = {
        //     items:{
        //         "1":2,
        //         "2":3
        //     },
        //     totalItems:5
        // }
    };



    return (
        <>
            <div>
                {/* <Link to="/products/a">
                    <img src="/images/peproni.png" alt="peproni" />
                </Link>
                <div className="text-center">
                    <h2 className="font-bold py-2 text-lg">Peproni</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">small</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="font-bold mt-6">$ 500</span>
                    <button className="bg-yellow-500 py-1 rounded-full px-4 font-bold">Add</button>
                </div> */}
                <Link to={`/products/${product.id}`} >
                    <img style={{maxHeight:"250px",minHeight:"250px"}} src={product.image} alt={product.title} />
                </Link>
                <div className="text-center">
                    <h2 className="font-bold py-2 text-lg">{product.title}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.category}</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="font-bold mt-6">$ {product.price}</span>
                    <button disabled={isAdding} onClick={(e)=> addToCart(e,product) } className={ `${ isAdding ? "bg-green-400" : "bg-pink-400" } px-4 rounded-full font-bold` }>Add{isAdding?"ed":""}</button>
                </div>
            </div>
        </>
    )
}

export default Product
