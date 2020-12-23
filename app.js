const express = require('express');
const app = express();
const port = 80;
const config = require('./config.json');
const Core = require('./core');

var core = new Core(app, config, './files', './pages', './themes');

app.get('*', (req, res) => {
    core.handleRequest(req, res);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})