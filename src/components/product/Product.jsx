import React from 'react'
import './product.css'
import dummy from '../../img/dummy.jpg'

const Product = ({link,img}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={dummy} alt="img" className='p-img' />
            </a>
        </div>
    )
}

export default Product