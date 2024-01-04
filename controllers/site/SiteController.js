module.exports = {
    home : (req, res) => {
        return res.json({title : 'Home'});
    },
    contato : (req, res) => {
        return res.json({title : 'Contato'});
    }
}