import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";
import ProductCatalog from "./ProductCatalog";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() =>{
        const fetchProducts = async () => {
        setLoading(true);
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
        setLoading(false);
        }

        fetchProducts();
    }, []);

    //console.log(products);
  


    if(loading){
        return<h2>Loading...</h2>
    }

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleGoBack = () =>{
        setSelectedProduct(null);
    };

  return (
    <>
    {selectedProduct ? (
        <div className="main-wrapp">
            <ProductDetails selectedProduct={selectedProduct}/>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    ) :(
        <ProductCatalog products={products} handleProductClick={handleProductClick}/>
    )
    }
    </>
  )
}
