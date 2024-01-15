const mysql = require('mysql');
const UserService = require('../../services/UserService');

module.exports = {
    get : async (req, res) => {
        let json = {error: '', result: []};

        let users = await UserService.all();

        for (let i in users) {
            json.result.push({
                id: users[i].id,
                name: users[i].name,
                email: users[i].email,
            });
        }

        return res.json(json.result);
    },
    store : (req, res) => {
        return res.json(req);
    },
}