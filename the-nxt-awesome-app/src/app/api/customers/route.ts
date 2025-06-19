import { NextResponse } from "next/server";


// GET http://localhost:3000/api/customers
export function GET(){

    // Access external servers(Database, Message queue);
    return NextResponse.json([
        {id: 1, name: "Google", location: "Hyderabad"},
        {id: 2, name: "Microsoft", location: "Bangalore"}
    ]);
}

// POST http://localhost:3000/api/customers