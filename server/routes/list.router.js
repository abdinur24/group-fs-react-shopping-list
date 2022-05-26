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


// Get Shopping List
router.get('/', (req, res) =>{
    console.log('in get');
    const sqlText = `SELECT * FROM "shoppingcart" ORDER BY "purchased" DESC, "id";`;
    pool.query(sqlText).then(result => res.send(result.rows)).catch((error) => {
            console.log('Error in get', error);
            res.sendStatus(500);
        });
});


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







router.delete('/:id', (req, res) => {
    const query = `DELETE FROM shoppingcart WHERE id=$1`;
    const values = [req.params.id];
    pool.query(query, values).then((response) => {
        res.send('delete router fired');
        res.sendStatus(200);
    }).catch(err => {
        console.log('error in delete', err);
        res.sendStatus(500);
    });

});

router.delete('/', (req, res) => {
    const query = `DELETE FROM shoppingcart`;
    //const values = [req.params.id];
    pool.query(query).then((response) => {
        res.send('delete all router fired');
        res.sendStatus(200);
    }).catch(err => {
        console.log('error in delete all', err);
        res.sendStatus(500);
    });

});
module.exports = router;