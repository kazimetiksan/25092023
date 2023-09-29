require('./db/mongoose');

const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routeUser = require('./routes/user');
app.use('/api',routeUser);

const publicPath = path.join(__dirname, '..', 'build')
app.use(express.static(publicPath))

app.get('*', (req, res) => {

    const indexPath = path.join(publicPath, 'index.html')
    res.sendFile(indexPath)
})

app.listen(8080, () => {
    console.log('started');
});