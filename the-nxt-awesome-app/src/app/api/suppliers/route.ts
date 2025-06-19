




import { NextResponse } from 'next/server'
import db from '@/db/lib'
import { Supplier } from '@/model/Supplier';

//GET http://localhost:3000/api/suppliers
//GET http://localhost:3000/api/suppliers?query=abc
export async function GET(req: Request) {

    const url = new URL(req.url);
    const query = url.searchParams.get("query")?.toLowerCase();
    

    let suppliers: Supplier[]

    try {

        if (query) {
            const stmt = db.prepare(`
                SELECT * FROM suppliers
                WHERE LOWER(name) LIKE ? OR LOWER(contactPerson) LIKE ? OR LOWER(location) LIKE ?
                `)
            suppliers = stmt.all(`%${query}%`, `%${query}%`, `%${query}%`) as Supplier[]
        } else {
            const stmt = db.prepare('SELECT * FROM suppliers')
            suppliers = stmt.all() as Supplier[]
        }
        return NextResponse.json(suppliers)
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}

// POST http://localhost:3000/api/suppliers {supplier}
export async function POST(req: Request) {

    try {
        const { name, contactPerson, email, location } = await req.json()

        const stmt = db.prepare(`
    INSERT INTO suppliers (name, contactPerson, email, location)
    VALUES (?, ?, ?, ?)
  `)

        const info = stmt.run(name, contactPerson, email, location)

        return NextResponse.json({
            id: info.lastInsertRowid,
            name,
            contactPerson,
            email,
            location
        })
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }

}


