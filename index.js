require('dotenv').config({path:'.env'});
const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const filmes = require('./src/data/filmes.json')

const siteRouter = require('./src/routes/site.js');
const adminRouter = require('./src/routes/admin.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/test',(req,res)=>{
    res.json(req.body);
});

app.use('/api/site', siteRouter);
app.use('/api/admin', adminRouter);

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

app.listen(process.env.PORT, () => {
    console.log('Servidor ativo');
});