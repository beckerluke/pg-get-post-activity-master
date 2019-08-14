const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'bookstore',
    host: 'localhost',
    port: 5432, 
    max: 10,
    idleTimeoutMillis: 10000
});

router.get('/', (req,res) => {
    console.log(`In /books GET`);
    
});

module.exports = router;