'use client'
import { useProducts } from '@/hooks/useProducts';
import { useTitle } from '@/hooks/useTitle';
import { Product } from '@/model/Product';
import { GadgetsContext } from "@/context/GadgetsContext";
import { useContext } from 'react';



const baseUrl = "http://localhost:9000/products";
function GadgetStore(){

   
    const gadgetsContext = useContext(GadgetsContext);
    useTitle("Gadgets Store")
    const {products} = useProducts(baseUrl);
   
    function addToCart(product: Product): void {
        
        const action = {type: "addItemToCart", payload: {product, quantity: 1}}
        gadgetsContext.dispatch(action);
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