'use client'
import { sayHello } from "@/actions/util";

import { useEffect, useState } from "react"

type SearchSupplierProps = {
    onFetch: (query: string)=> Promise<JSX.Element>
}

export default function SearchSupplier(props: SearchSupplierProps){

    const [searchText, setSearchText] = useState("");
    const [supplierView, setSupplierView] = useState<JSX.Element>();

    useEffect( () => {

        getSupplierView("");

    }, [])

    async function getSupplierView(query: string){

        const supplierView = await props.onFetch(query);
        setSupplierView(supplierView);
    }

    async function search(){

        console.log("in search event handler..");
        const result = await sayHello("Anil");
        console.log(result);

        getSupplierView(searchText);
    }

    return (
        <div>
            <input type="search" className="form-control" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <br />
            <button className="btn btn-info" onClick={search}>Search</button>   
            {searchText? <div className="alert alert-info">Serach Results for {searchText}</div>:null}

            {/* component(ViewSuppliers) fetched for the server action */}
            {supplierView}
        </div>
    )
}