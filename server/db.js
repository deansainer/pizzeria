const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'determind',
    host: 'localhost',
    port: '5432',
    database: 'pizzeria_db'
});

module.exports = pool;