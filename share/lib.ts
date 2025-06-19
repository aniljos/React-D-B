import Database from 'better-sqlite3'

// Initialize database
const db = new Database('data.db')

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    contactPerson TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    location TEXT NOT NULL
  )
`)

// Define supplier type
interface Supplier {
  id: number
  name: string
  contactPerson: string
  email: string
  location: string
}

// Check if table is empty
const result = db.prepare('SELECT COUNT(*) as count FROM suppliers').get()
const count = (result as {count: number}).count;

if (count === 0) {
  console.log("INSERTING RECORDS TO SUPPLIERS") ;
  const suppliers: Supplier[] = [
    { id: 1, name: 'ABC Supplies', contactPerson: 'John Doe', email: 'john@abc.com', location: 'New York' },
    { id: 2, name: 'XYZ Equipment', contactPerson: 'Jane Smith', email: 'jane@xyz.com', location: 'San Francisco' },
    { id: 3, name: 'PQR Tools', contactPerson: 'Mike Johnson', email: 'mike@pqrtools.com', location: 'Chicago' },
    { id: 4, name: 'Delta Industrial', contactPerson: 'Emily Davis', email: 'emily@deltaind.com', location: 'Houston' },
    { id: 5, name: 'Techno Trade', contactPerson: 'David Lee', email: 'david@technotrade.com', location: 'Seattle' },
    { id: 6, name: 'Gamma Distributors', contactPerson: 'Lisa Brown', email: 'lisa@gammadist.com', location: 'New York' },
    { id: 7, name: 'Sunshine Supplies', contactPerson: 'Chris Green', email: 'chris@sunshine.com', location: 'Los Angeles' },
    { id: 8, name: 'Apex Manufacturing', contactPerson: 'Karen White', email: 'karen@apexmfg.com', location: 'Chicago' },
    { id: 9, name: 'Prime Products', contactPerson: 'Robert Black', email: 'robert@primeproducts.com', location: 'New York' },
    { id: 10, name: 'Superior Equipment', contactPerson: 'Nancy Gray', email: 'nancy@superiorequip.com', location: 'Dallas' },
    { id: 11, name: 'Alpha Supplies', contactPerson: 'Tom Hanks', email: 'tom@alphasupplies.com', location: 'New York' },
    { id: 12, name: 'Bravo Equipment', contactPerson: 'Sally Fields', email: 'sally@bravoequip.com', location: 'San Francisco' },
    { id: 13, name: 'PQR Solutions', contactPerson: 'Michael Scott', email: 'michael@pqrsolutions.com', location: 'Chicago' },
    { id: 14, name: 'Delta Tech', contactPerson: 'Emily Evans', email: 'emily@deltatech.com', location: 'Houston' },
    { id: 15, name: 'Tech Solutions', contactPerson: 'David Kim', email: 'david@techsolutions.com', location: 'Seattle' },
    { id: 16, name: 'Gamma Logistics', contactPerson: 'Lisa Turner', email: 'lisa@gammalogistics.com', location: 'New York' },
    { id: 17, name: 'Sunny Equipment', contactPerson: 'Chris Brown', email: 'chris@sunny.com', location: 'Los Angeles' },
    { id: 18, name: 'Apex Distributors', contactPerson: 'Karen Walker', email: 'karen@apexdist.com', location: 'Chicago' },
    { id: 19, name: 'Prime Solutions', contactPerson: 'Robert White', email: 'robert@primesolutions.com', location: 'New York' },
    { id: 20, name: 'Superior Supplies', contactPerson: 'Nancy Carter', email: 'nancy@superiorsupplies.com', location: 'Dallas' },
    { id: 21, name: 'Omega Distributors', contactPerson: 'George Martin', email: 'george@omegadist.com', location: 'San Francisco' },
    { id: 22, name: 'Eagle Tools', contactPerson: 'Henry Ford', email: 'henry@eagletools.com', location: 'Los Angeles' },
    { id: 23, name: 'Global Tech', contactPerson: 'Sara Wilson', email: 'sara@globaltech.com', location: 'New York' },
    { id: 24, name: 'Fusion Equipment', contactPerson: 'Paul Young', email: 'paul@fusionequip.com', location: 'Chicago' },
    { id: 25, name: 'West Coast Manufacturing', contactPerson: 'Laura Bell', email: 'laura@westcoastmfg.com', location: 'San Francisco' },
    { id: 26, name: 'Sunrise Distributors', contactPerson: 'Dan Taylor', email: 'dan@sunrisedist.com', location: 'New York' },
    { id: 27, name: 'Tech Solutions Group', contactPerson: 'David Young', email: 'david@techsolutionsgroup.com', location: 'Seattle' },
    { id: 28, name: 'Prime Equipment', contactPerson: 'Linda Roberts', email: 'linda@primeequip.com', location: 'Houston' },
    { id: 29, name: 'Delta Engineering', contactPerson: 'Evelyn Stewart', email: 'evelyn@deltaeng.com', location: 'New York' },
    { id: 30, name: 'Zeta Supplies', contactPerson: 'Oliver King', email: 'oliver@zetasupplies.com', location: 'San Francisco' }
  ]

  const insert = db.prepare(`
    INSERT INTO suppliers (id, name, contactPerson, email, location)
    VALUES (@id, @name, @contactPerson, @email, @location)
  `)

  const insertMany = db.transaction((data: Supplier[]) => {
    for (const supplier of data) insert.run(supplier)
  })

  insertMany(suppliers)
  console.log('Inserted 30 supplier records.')
}

export default db
