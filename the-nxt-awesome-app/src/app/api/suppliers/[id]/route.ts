



import { NextResponse } from 'next/server'
import db from '@/db/lib'
import { Supplier } from '@/model/Supplier'

type Params = { params: Promise<{ id: string }> }



// GET /api/suppliers/:id
//GET http://localhost:3000/api/suppliers/:id
export async function GET(_: Request, { params }: Params) {

  const id = (await params).id
  const stmt = db.prepare('SELECT * FROM suppliers WHERE id = ?')
  const supplier: Supplier | undefined = stmt.get(id) as Supplier;

  if (!supplier) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  return NextResponse.json(supplier)
}


// DELETE /api/suppliers/:id
//DELETE http://localhost:3000/api/suppliers/:id
export async function DELETE(_: Request, { params }: Params) {

  const id = (await params).id
  const stmt = db.prepare('DELETE FROM suppliers WHERE id = ?')
  const result = stmt.run(id)

  if (result.changes === 0) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  return NextResponse.json({ deleted: true })
}