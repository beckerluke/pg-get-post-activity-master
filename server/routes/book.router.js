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

    let queryText = `SELECT * FROM "books";`;
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        
        // sending back query results from database as an array of objects
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET /songs ${error}`);
        res.sendStatus(500);
    });
    
});

router.post('/', (req,res) => {
    console.log(`In /songs POST with`, req.body);
    
    const bookToAdd = req.body;
    let queryText = `INSERT INTO "books" ("title", "author", "published")
                    VALUES ($1, $2, $3);`;
    pool.query(queryText, [bookToAdd.title, bookToAdd.author, bookToAdd.published])
    .then((responseFromDatabase) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in POST /api/books ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;