const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
// Get Shopping List
router.get('/', (req, res) =>{
    console.log('in get');
    const sqlText = `SELECT * FROM "shoppingcart" ORDER BY "purchased" DESC, "id";`;
    pool.query(sqlText).then(result => res.send(result.rows)).catch((error) => {
            console.log('Error in get', error);
            res.sendStatus(500);
        });
});

module.exports = router;