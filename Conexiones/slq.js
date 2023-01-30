// const pgPromise = require('pg-promise')
const { Pool } = require('pg');


const pool = new Pool({
    host: 'bisaq08fekqkli8e9iw0-postgresql.services.clever-cloud.com',
    port: '5432',
    database: 'bisaq08fekqkli8e9iw0',
    user: 'uifh0hpltzq48p5fdtkk',
    password: 'ucAiTHzAP74sVSIew6OCRY7xLUOQUu',
    ssl: {
        rejectUnauthorized: false,
    }
});

exports.db = pool