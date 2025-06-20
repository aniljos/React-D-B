import { Customer } from "@/model/Customer";
import { Metadata } from "next";
//import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next React Customer",
  
};

export default async function CustomerPage(){

    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            <h3>Customers</h3>
            <div className="alert alert-info">This page demonstartes streaming with suspense</div>
            <Suspense fallback={<div className="alert alert-success">Fetching customers #1...</div>}>
                <CustomerListing delay={7000}/>
            </Suspense>
            <Suspense fallback={<div className="alert alert-warning">Fetching customers #2...</div>}>
                <CustomerListing delay={4000}/>
            </Suspense>
            
        </div>
    )
}





export async function CustomerListing(props: {delay: number}){


    //simulate a delay
    await new Promise((resolve) => setTimeout(resolve, props.delay));

    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer []>(url); 
    //const customers = response.data;

    const response = await fetch(url, {cache: "no-store"});

    
    const customers = await response.json() as Customer[];

   // console.log("CustomerPage", customers);

    return (
        <div>
            {/* <h4>Customers</h4> */}

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