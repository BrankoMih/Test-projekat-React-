import React, { useState, useEffect } from 'react'


function ProductDetails({selectedProduct}) {
    const [currImage, setCurrImage] = useState(null);

    useEffect (() =>{
        setCurrImage(selectedProduct.thumbnail);
    }, [])

    const handelImageArray = (image) =>{
        setCurrImage(image);
    }

  return (
    <div className="product-details">
        <div className="colom-left">
            <div className="current-image">
                { <img className='cur-sel-img' src={currImage} alt={selectedProduct.title} /> }
            </div>
            <div  className="image-list" key={selectedProduct.id}>
                {selectedProduct.images.map( (image, index) =>(
                    <div className="image-array" key={index}>
                        <a onClick={() => handelImageArray(image)}>
                            <img className={`image ${image === currImage ? 'active':''}`} src={image} alt=""/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div className="colom-right">
            <p>Brand: {selectedProduct.brand}</p>
            <p>Product name: {selectedProduct.title}</p>
            <p>Product description: {selectedProduct.description}</p>
            <p>In Stock: {selectedProduct.stock}</p>
            <p>Rating: {selectedProduct.rating}</p>
            <p>Price: {selectedProduct.price}$</p>
        </div>
    </div>
  )
}

export default ProductDetails