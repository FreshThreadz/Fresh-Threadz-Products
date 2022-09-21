const { Pool } = require('pg');

export const connection = new Pool({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    host: process.env.PGHOST,
});

export async function connectionDemo():Promise<void> {
    const query = "SELECT * FROM related LIMIT 2";
    const example = await connection.query(query);
    console.log(example);
};