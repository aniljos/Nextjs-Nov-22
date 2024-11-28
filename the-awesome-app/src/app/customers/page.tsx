import { Customer } from "@/model/Customer";
//import axios from "axios";
import { Metadata } from "next";
//import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Next App Customers",
};

export default async function CustomerListingPage(){

    //delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <div>
            <h4>Customer Listing</h4>
            <p>This is an example suspense and streaming...</p>

            <Suspense fallback={<div className="alert alert-warning">Loading content 1...</div>}>
                <CustomerPage interval={7000}/>
            </Suspense>
            <Suspense fallback={<div className="alert alert-warning">Loading content 2...</div>}>
                <CustomerPage interval={5000}/>
            </Suspense>
           
        </div>
    )
}

type CustomerPageProps = {
    interval: number
}

export async function CustomerPage(props: CustomerPageProps){

    // const cookieStore = await cookies()
    // const theme = cookieStore.get('theme')
    console.log("rendering the customer page...");

    //delay
    await new Promise(resolve => setTimeout(resolve, props.interval));
    //api call
    const url = "http://localhost:9000/customers";
    // const response = await axios.get<Customer[]>(url);
    // const customers = response.data;
    // console.log("customers", customers);

    const response = await fetch(url, {cache: 'no-cache'});
    //const response = await fetch(url);
    const customers = await response.json() as Customer[];
    console.log("customers", customers);


    return (
        <div>
            <h4>Customers</h4>
            <p>This is a React Server Component(RSC)</p>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {

                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td><Link href={"/customers/" + customer.id}> {customer.name}</Link></td>
                                <td>{customer.location}</td>    
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}