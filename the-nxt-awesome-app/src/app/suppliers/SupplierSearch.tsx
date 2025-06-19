'use client'

import { sayHello, sayHelloView } from "@/actions/hello";
import { JSX, useEffect, useState } from "react"

type SupplierSearchProps = {
    fetchData: (query?: string)=> Promise<JSX.Element>
}

export default function SupplierSearch(props: SupplierSearchProps){

    const [searchKey, setSearchKey] = useState("");
    const [messageView, setMessageView] = useState<JSX.Element>();
    const [supplierView, setSupplierView] = useState<JSX.Element>();

    async function handleSearch(){
        //TODO
        console.log("searching for:" + searchKey)
        const result = await sayHello(searchKey);
        console.log("result", result);
        const _messageView = await sayHelloView(searchKey);
        setMessageView(_messageView);

        const _supplierView = await props.fetchData(searchKey);
        setSupplierView(_supplierView);

    }
    useEffect(() => {

       async function initializeData(){
        const _supplierView = await props.fetchData("");
        setSupplierView(_supplierView);
       }

       initializeData();

    }, [])
    return (
        <div>
            <input type="search" placeholder="Search for Suppliers" 
                                className="form-control" value={searchKey} onChange={e => setSearchKey(e.target.value)}/>
            <button className="btn btn-success" onClick={handleSearch}>Search</button>
            {messageView}
            {supplierView}
        </div>
    )
}