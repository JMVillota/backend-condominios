const pgPromise = require('pg-promise')
const config={
    host:'localhost',
    port:'5432',
    database:'prueba_insumos',
    user:'postgres',
    password:'12345'
    }
    
const pgp = pgPromise({})
const db = pgp(config)

exports.db=db