const db = require('../../database/db');

module.exports = {
    all: () => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM users', (error, results) => {
                if(error) { reject(error); return }
                accept(results);
            });
        });
    }
}