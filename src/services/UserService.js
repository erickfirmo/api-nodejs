const db = require('../../database/db');

module.exports = {
    all: () => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM users', (error, results) => {
                if(error) { reject(error); return }
                accept(results);
            });
        });
    },
    find: (id) => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error);  return; }

                if(results.length > 0) {
                    accept(results[0])
                } else {
                    accept(false);
                }
            });
        });
    }
}