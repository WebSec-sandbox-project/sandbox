# shop-tools

Small helpers around the shop database. No dependencies: Node 20+ only.

- `src/db.js`       run one SQL statement through the SQL gateway
- `src/orders.js`   order helpers
- `src/pricing.js`  price formatting
- `src/products.js` product helpers
- `src/users.js`    user helpers

The database has three tables: `orders`, `users`, `products`.

Run the tests with `npm test` (or `node --test`).
