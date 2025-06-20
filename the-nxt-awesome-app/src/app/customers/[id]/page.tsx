import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link"

type CustomerPageProps = {
    params: Promise<{ id: number }>
}

// export const metadata: Metadata = {
//   title: "Next React Customer ",
// };

export async function generateMetadata(props: CustomerPageProps): Promise<Metadata> {

    const params = await props.params;
    const url = "http://localhost:9000/customers/" + params.id;
    const response = await fetch(url, { method: "GET" });
    const customer = await response.json() as Customer;
    return {
        title: "Next React Customer " + customer.name
    }
}

export default async function CustomerPage(props: CustomerPageProps) {

    const params = await props.params;
    const url = "http://localhost:9000/customers/" + params.id;
    const response = await fetch(url, { method: "GET" });
    const customer = await response.json() as Customer;

    return (
        <div>
            <h3>Customer Details: {params.id}</h3>

            <div>
                <p>ID: {customer.id}</p>
                <p>Name: {customer.name}</p>
                <p>Location: {customer.location}</p>
            </div>

            <br />
            <Link href="/customers">Back</Link>
        </div>
    )
}