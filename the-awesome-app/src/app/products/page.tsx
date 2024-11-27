'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import ProductView from "./ProductView";

const baseUrl = "http://localhost:9000/products";
//const baseUrl = "http://localhost:9000/secure_products";

export default function ListProductsPage(){

    
    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setMessageVisible] = useState(false);
    const router = useRouter();
    const auth = useSelector((state: AppState) => state.auth);
   

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts() {
        
        try {
            // if(!auth.isAuthenticated){
            //     router.push("/login");
            //     return;
            // }


            const headers = { Authorization: `Bearer ${auth.accessToken}`}
            const response = await axios.get<Product[]>(baseUrl, {headers} );
            console.log("response", response);
            setProducts(response.data);
           

        } catch (error) {

            console.log("error", error);
        }
    }

    const deleteProduct = useCallback(async (product: Product) => {

        try {
            
            const url = `${baseUrl}/${product.id}`;
            await axios.delete(url);
            //await fetchProducts();
           const copy_of_products = [...products];
           const index = copy_of_products.findIndex(item => item.id === product.id);
           
           if(index !== -1){

            copy_of_products.splice(index, 1);
            setProducts(copy_of_products);
           }

            alert("deleted product " + product.id);

        } catch {
            alert("delete product failed" + product.id);
        }
    }, [products])

    const editProduct = useCallback((product: Product)=>{

        router.push("/products/" + product.id);

    }, [])

    const totalPrice = useMemo( () => {

        console.log("calculating totalPrices...");
        let totalPrices = 0;
        products.forEach(p => {
            if(p.price)
                totalPrices+= p.price;
        })
        return totalPrices;

    }, [products])

    return (
        <div>
            <h4>List Products</h4>

            <div  className="alert alert-warning">Total Price: {totalPrice}</div>

            {isMessageVisible ? <div className="alert alert-info">This is a React client component</div> : null}
            
            <button className="btn btn-info" onClick={() => setMessageVisible(p => !p)}>{isMessageVisible ? 'Hide' : 'Show'}</button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                        <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )

                })}
            </div>
        </div>
    )
}


