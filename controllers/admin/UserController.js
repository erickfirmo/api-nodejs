const mysql = require('mysql');

module.exports = {
    get : (req, res) => {
        return res.json({ user : 'Erick Firmo' });

    },
    store : (req, res) => {
        return res.json(req);
    },
}