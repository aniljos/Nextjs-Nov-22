import { Customer } from "@/model/Customer";
import axios from "axios";
import Link from "next/link";

export default async function CustomerPage(){

    console.log("rendering the customer page...");

    //delay
    //await new Promise(resolve => setTimeout(resolve, 5000));
    //api call
    const url = "http://localhost:9000/customers";
    const response = await axios.get<Customer[]>(url);
    const customers = response.data;
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