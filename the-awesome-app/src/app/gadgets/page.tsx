'use client'
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/model/Product';
import { addItemToCart } from '@/redux/gadgetsReducer';
import { AppDispatch } from '@/redux/store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


const baseUrl = "http://localhost:9000/products";
function GadgetStore(){

   
    const dispatch = useDispatch<AppDispatch>();
    const {products} = useProducts(baseUrl);
    
    function addToCart(product: Product): void {

        const action = addItemToCart({product: product, quantity: 1});
        dispatch(action)
    }

    function renderProducts() {

        const productsView =  products.map((item) => {
           

            return (
                <div className="col" key={item.id} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;