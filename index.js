const express = require('express');
const app = express();

const filmes = require('./src/data/filmes.json')

const siteRouter = require('./routes/site.js');
const adminRouter = require('./routes/admin.js');

app.use('/', siteRouter);
app.use('/admin', adminRouter);

/*app.get('/', (req, res) => {
    return res.json({message: 'oi'});
});

app.get('/usuario', (req, res) => {
    return res.json({user: 'Erick'});
});

app.get('/filmes', (req, res) => {
    return res.json({filmes});
});
*/

app.listen(3000, () => {
    console.log('Servidor ativo');
});