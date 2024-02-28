import React, { useState } from 'react'
import { Pagination } from './Pagination';

function ProductCatalog({products, handleProductClick}) {
    const [productsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='main-wrapp'>
        <div className="products">
            {currentProducts.map(product => (

                <div className="product-wrapp" key={product.id}>
                    <div className="product-top">
                        <a onClick={() => handleProductClick(product)}>
                            <img className="product-thumbnail" src={product.thumbnail} alt={product.title} />
                        </a>
                        <a onClick={() => handleProductClick(product)}>
                            <p className='product-p'>{product.title}</p>
                        </a>
                    </div>
                    <div className="product-bottom">
                        <p>Rating: <b>{product.rating}/5</b></p>
                        <p>Price: {product.price}$</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='pagination'>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
        </div>
    </div>
  )
}

export default ProductCatalog