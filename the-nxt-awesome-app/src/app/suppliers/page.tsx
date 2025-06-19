import { Supplier } from "@/model/Supplier";
import SupplierSearch from "./SupplierSearch";

export default async function SupplierPage(){

    // async function fetchSuppliers(){
    //     //Access DB or API
    //     const url = "http://localhost:3001/api/suppliers";
    //     const response = await fetch(url);
    //     const suppliers = await response.json() as Supplier [];
    //     return suppliers;
    // }

    async function fetchSuppliersView(query?: string){

        'use server'
        //Access DB or API
        const url = "http://localhost:3001/api/suppliers?query=" + query;
        const response = await fetch(url);
        const suppliers = await response.json() as Supplier [];
        return ( <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Contact Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => {
                        return (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.location}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>);
    }


    //const suppliers = await fetchSuppliers();
    return (
        <div>
            <h4>Suppliers</h4>

            <SupplierSearch fetchData={fetchSuppliersView}/>
            <br />

           
        </div>
    )
}