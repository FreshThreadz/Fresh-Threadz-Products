"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDemo = exports.connection = void 0;
const { Pool } = require('pg');
exports.connection = new Pool({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    host: process.env.PGHOST,
});
async function connectionDemo() {
    const query = "SELECT * FROM related LIMIT 2";
    const example = await exports.connection.query(query);
    console.log(example);
}
exports.connectionDemo = connectionDemo;
;
