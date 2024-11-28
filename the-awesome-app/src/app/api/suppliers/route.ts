import {suppliers} from '@/data/suppliers';

// URL: http://locahost:3000/api/suppliers

import { NextResponse } from "next/server";

// GET http://locahost:3000/api/suppliers

export function GET(request: Request){

    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    // fetch the data from the DB: Nodejs API's
    if(query){

        const results = suppliers.filter(supplier => 
                    supplier.name.toLowerCase().includes(query.toLowerCase()) 
                    || supplier.location.toLowerCase().includes(query.toLowerCase())
                    || supplier.contactPerson.toLowerCase().includes(query.toLowerCase()))
        return NextResponse.json(results, {status: 200});

    }

    return NextResponse.json(suppliers, {status: 200});
}

// POST http://locahost:3000/api/suppliers
export async function POST(request: Request){

    try {
        
        const supplier = await request.json();
        if(supplier){
            suppliers.push(supplier);
            return NextResponse.json(supplier, {status: 200});
        }
        else{
            return NextResponse.json({}, {status: 400});
        }

    } catch (error) {
        return NextResponse.error();
    }
    
}
