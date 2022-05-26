const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req, res) =>{
    console.log(req.body);
    const list = req.body;
    console.log('In POST list', list);
    const sqlText = `INSERT INTO "shoppingcart"("name","quantity","unit","purchased")
    VALUES($1, $2, $3, $4);`
    pool.query(sqlText, [list.name, list.quantity, list.unit, list.purchased])
        .then(results => {
            console.log('POST list is', list);
            res.sendStatus(201)
        }).catch(err =>{
            console.log('ERROR in POST', err);
            res.sendStatus(500);
        });
})

router.put('/:id', (req, res) =>{
    const listid = req.params.id
    const sqlText = `UPDATE "shoppingcart" SET "purchased" = TRUE WHERE "id"=$1;`
    pool.query(sqlText, [listid])
        .then(results => {
            res.sendStatus(201)
        }).catch(err =>{
            console.log('Error in PUT', err);
            res.sendStatus(500);
        })
})

module.exports = router;