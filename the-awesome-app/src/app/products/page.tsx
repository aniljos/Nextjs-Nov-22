'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from './page.module.css';

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts() {
        
        try {
            
            const response = await axios.get<Product[]>(baseUrl);
            console.log("response", response);
            setProducts(response.data);

        } catch (error) {

            console.log("error", error);
        }
    }

    return (
        <div>
            <h4>List Products</h4>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                        <div key={product.id} className={classes.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}


