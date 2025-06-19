
CREATE TABLE suppliers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  contactPerson TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  location TEXT NOT NULL
);


INSERT INTO suppliers (id, name, contactPerson, email, location) VALUES
(1, 'ABC Supplies', 'John Doe', 'john@abc.com', 'New York'),
(2, 'XYZ Equipment', 'Jane Smith', 'jane@xyz.com', 'San Francisco'),
(3, 'PQR Tools', 'Mike Johnson', 'mike@pqrtools.com', 'Chicago'),
(4, 'Delta Industrial', 'Emily Davis', 'emily@deltaind.com', 'Houston'),
(5, 'Techno Trade', 'David Lee', 'david@technotrade.com', 'Seattle'),
(6, 'Gamma Distributors', 'Lisa Brown', 'lisa@gammadist.com', 'New York'),
(7, 'Sunshine Supplies', 'Chris Green', 'chris@sunshine.com', 'Los Angeles'),
(8, 'Apex Manufacturing', 'Karen White', 'karen@apexmfg.com', 'Chicago'),
(9, 'Prime Products', 'Robert Black', 'robert@primeproducts.com', 'New York'),
(10, 'Superior Equipment', 'Nancy Gray', 'nancy@superiorequip.com', 'Dallas'),
(11, 'Alpha Supplies', 'Tom Hanks', 'tom@alphasupplies.com', 'New York'),
(12, 'Bravo Equipment', 'Sally Fields', 'sally@bravoequip.com', 'San Francisco'),
(13, 'PQR Solutions', 'Michael Scott', 'michael@pqrsolutions.com', 'Chicago'),
(14, 'Delta Tech', 'Emily Evans', 'emily@deltatech.com', 'Houston'),
(15, 'Tech Solutions', 'David Kim', 'david@techsolutions.com', 'Seattle'),
(16, 'Gamma Logistics', 'Lisa Turner', 'lisa@gammalogistics.com', 'New York'),
(17, 'Sunny Equipment', 'Chris Brown', 'chris@sunny.com', 'Los Angeles'),
(18, 'Apex Distributors', 'Karen Walker', 'karen@apexdist.com', 'Chicago'),
(19, 'Prime Solutions', 'Robert White', 'robert@primesolutions.com', 'New York'),
(20, 'Superior Supplies', 'Nancy Carter', 'nancy@superiorsupplies.com', 'Dallas'),
(21, 'Omega Distributors', 'George Martin', 'george@omegadist.com', 'San Francisco'),
(22, 'Eagle Tools', 'Henry Ford', 'henry@eagletools.com', 'Los Angeles'),
(23, 'Global Tech', 'Sara Wilson', 'sara@globaltech.com', 'New York'),
(24, 'Fusion Equipment', 'Paul Young', 'paul@fusionequip.com', 'Chicago'),
(25, 'West Coast Manufacturing', 'Laura Bell', 'laura@westcoastmfg.com', 'San Francisco'),
(26, 'Sunrise Distributors', 'Dan Taylor', 'dan@sunrisedist.com', 'New York'),
(27, 'Tech Solutions Group', 'David Young', 'david@techsolutionsgroup.com', 'Seattle'),
(28, 'Prime Equipment', 'Linda Roberts', 'linda@primeequip.com', 'Houston'),
(29, 'Delta Engineering', 'Evelyn Stewart', 'evelyn@deltaeng.com', 'New York'),
(30, 'Zeta Supplies', 'Oliver King', 'oliver@zetasupplies.com', 'San Francisco');
