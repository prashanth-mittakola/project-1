import React from 'react';
import ProductsPage from './ProductsPage';

const Home = () => {
    return (
        <>
        <div className="hero py-16">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg"><em>Trending designs</em></h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Season best offers</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-pink-400 hover:bg-pink-500">Shop Now</button>
                </div>
                <div className="w-1/2" className="flex mx-auto justify-center">
                    <img className="w-4/5" src="/images/mainImage.jpg" alt="Image" height="500px" style={{objectFit:"cover"}}/>
                </div>
            </div>
        </div>
        <div className="pb-24">
            <ProductsPage />
        </div>
        </>
    )
}

export default Home;