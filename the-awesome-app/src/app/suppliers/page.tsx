import { Supplier } from "@/model/Supplier";
import SearchSupplier from "./SearchSupplier";
import ViewSuppliers from "./ViewSuppliers";
import { suppliers } from "@/data/suppliers";
import Link from "next/link";

export default async function SupplierPage(){

    
    //server action
    async function fetchSuppliers(query: string){

        'use server'

        // DB call
        // const url = "http://localhost:3001/api/suppliers?query=" + query;
        // const response = await fetch(url, {cache: 'no-cache'}); // SSR
        // const suppliers = await response.json() as Supplier[];

        if(query){

            const results = suppliers.filter(supplier => 
                        supplier.name.toLowerCase().includes(query.toLowerCase()) 
                        || supplier.location.toLowerCase().includes(query.toLowerCase())
                        || supplier.contactPerson.toLowerCase().includes(query.toLowerCase()))
            return <ViewSuppliers suppliers={results}/>
    
        }

        return <ViewSuppliers suppliers={suppliers}/>
    }

    return (
        <div>
            <h4>Suppliers</h4>

            <Link href="/suppliers/add">Add Supplier</Link>
            <br />

            <SearchSupplier onFetch={fetchSuppliers}/>
        </div>
    )
}