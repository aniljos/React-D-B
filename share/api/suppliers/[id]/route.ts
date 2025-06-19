import {  NextResponse } from 'next/server'
import db from '@/db/lib'
import { Supplier } from '@/model/Supplier'

type Params = { params: { id: string } }



// GET /api/suppliers/:id
export async function GET(_: Request, { params }: Params) {
  const stmt = db.prepare('SELECT * FROM suppliers WHERE id = ?')
  const supplier: Supplier | undefined = stmt.get(params.id) as Supplier;

  if (!supplier) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  return NextResponse.json(supplier)
}


// DELETE /api/suppliers/:id
export async function DELETE(_: Request, { params }: Params) {

  const stmt = db.prepare('DELETE FROM suppliers WHERE id = ?')
  const result = stmt.run(params.id)

  if (result.changes === 0) {
    return NextResponse.json({ error: 'Supplier not found' }, { status: 404 })
  }

  return NextResponse.json({ deleted: true })
}
