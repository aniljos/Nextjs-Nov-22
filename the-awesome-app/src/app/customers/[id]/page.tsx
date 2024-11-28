import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link";

type CustomerViewPageProps = {

    params: {id: number}
}

// export const metadata: Metadata = {
//     title: "Next App Customers View",
// };

export async function generateMetadata(props: CustomerViewPageProps): Promise<Metadata>{

    const url = "http://localhost:9000/customers";
    const response = await fetch(url, {method: "GET"});
    const customers = await response.json() as Customer[];
    const customer = customers.find(item => item.id.toString() === props.params.id.toString())

    return {
        title: "Next App Customer " + customer?.name
    }
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const url = "http://localhost:9000/customers";
    const response = await fetch(url, {method: "GET"});
    const customers = await response.json() as Customer[];
    const customer = customers.find(item => item.id.toString() === props.params.id.toString())




    return (
        <div>
            <h4>Customer View: {props.params.id}</h4>
            <p>Name : {customer?.name}</p>
            <p>Location : {customer?.location}</p>
            <br />

            <Link href="/customers">Back</Link>
        </div>
        

    )
}