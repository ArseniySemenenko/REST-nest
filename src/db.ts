const {Pool} = require("pg");

const pool = new Pool({
    host: "localhost",
    port:5432,
    user: "postgres",
    password: "user",
    database: "rest"
});

module.exports = pool;