import React from 'react'
import Product from '../product/Product'
import './productList.css'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="-title">Create & inspire.It's Akshay</h1>
                <p className="pl-desc">Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.</p>
                <div className="pl-list">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />

                    <Product />


                </div>
            </div>
        </div>
    )
}

export default ProductList