
require('log-timestamp')
const express = require('express');
const app = express();
const port = 8080;
const config = require('./config.json');
const Core = require('./core');
const chokidar = require('chokidar');
const exec = require('child_process').exec;

chokidar.watch('.', { ignoreInitial: true, awaitWriteFinish: true, depth: 0 }).on('all', (event, path) => {
    if(path.endsWith('.js')) {
        console.log(`${path} changed. Restarting Passenger.`);
        exec('touch tmp/restart.txt');
    }
});

var core = new Core(app, config, './files', './pages', './themes');

app.get('*', (req, res) => {
    core.handleRequest(req, res);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});