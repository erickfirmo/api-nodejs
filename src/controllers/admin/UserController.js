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
    find: async (req, res) => {

        let json = {error: '', result: {}};

        let id = req.params.id;

        let user = await UserService.find(id);

        if(user) {
            json.result = user;
        }

        return res.json(json);
    },
    store : (req, res) => {
        return res.json(req);
    },
}