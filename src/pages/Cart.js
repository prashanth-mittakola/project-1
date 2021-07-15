import React,{ useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext'

const Cart = () => {

    const [products,setProducts] = useState([]);
    const {cart} = useContext(CartContext);
    let cartKeys = Object.keys(cart.items);
    useEffect(() => {
        if(!cart.items){
            return;
        }
    }, [cart])

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {/* {
                    products.map(product=>{
                        return(
                            <li className="mb-12">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src="/images/peproni.png" alt="" className="h-16"/>
                                        <span className="font-bold ml-4 w-48">Abcd</span>
                                    </div>
                                    <div className="flex items-center">
                                        <button className="bg-pink-400 px-4 py-2 rounded-full leading-none">-</button>
                                        <strong className="px-4">5</strong>
                                        <button className="bg-pink-400 px-4 py-2 rounded-full leading-none">+</button>
                                    </div>
                                    <strong>Rs. 500</strong>
                                    <button className="bg-red-400 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                                </div>
                            </li>
                        )
                    })
                } */}
                <li className="mb-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="/images/peproni.png" alt="" className="h-16"/>
                            <span className="font-bold ml-4 w-48">Abcd</span>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-pink-400 px-4 py-2 rounded-full leading-none">-</button>
                            <strong className="px-4">5</strong>
                            <button className="bg-pink-400 px-4 py-2 rounded-full leading-none">+</button>
                        </div>
                        <strong>Rs. 500</strong>
                        <button className="bg-red-400 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                    </div>
                </li>
            </ul>
            <hr className="my-6" />
            <div className="text-right"><strong>Grand Total:</strong>Rs. 1000</div>
            <div className="text-right mt-6">
                <button className="bg-pink-400 px-4 py-2 rounded-full leading-none"><strong>Order Now</strong></button>
            </div>
        </div>
    )
}

export default Cart
