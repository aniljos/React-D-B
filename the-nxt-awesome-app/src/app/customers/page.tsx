import { Customer } from "@/model/Customer";
//import axios from "axios";
import Link from "next/link";

export default async function CustomerPage(){

    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer []>(url); 
    //const customers = response.data;

    const response = await fetch(url, {cache: "no-store"});
    const customers = await response.json() as Customer[];

    console.log("CustomerPage", customers);

    return (
        <div>
            <h4>Customers</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Locations</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>
                                    <Link href={`/customers/${customer.id}`}>{customer.name}</Link>
                                </td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}