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
    findBy: (column, value) => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM users WHERE ? = ?', [column, value], (error, results) => {
                if(error) { reject(error);  return; }

                if(results.length > 0) {
                    accept(results[0])
                } else {
                    accept(false);
                }
            });
        });
    },
    find: (id) => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM users WHERE id = ? ', [id], (error, results) => {
                if(error) { reject(error);  return; }

                if(results.length > 0) {
                    accept(results[0])
                } else {
                    accept(false);
                }
            });
        });
    },
    store: (params) => {
        return new Promise((accept, reject) => {
            db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [params.name, params.email, params.password],
                (error, results) => {
                    if(error) { reject(error); return; }
                    accept(results.insertId);

                }
            );
        });
    },
    update: (params) => {
        return new Promise((accept, reject) => {
            db.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
                [params.name, params.email, params.password, params.id],
                (error, results) => {
                    if(error) { reject(error); return; }
                    accept(results.insertId);

                }
            );
        });
    }
}