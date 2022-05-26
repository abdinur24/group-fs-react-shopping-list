const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...









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