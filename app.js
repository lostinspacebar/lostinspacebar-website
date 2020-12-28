
require('log-timestamp')
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const path = require('path');
const projects = require('./api/projects');

/*
const chokidar = require('chokidar');
const exec = require('child_process').exec;

chokidar.watch('.', { ignoreInitial: true, awaitWriteFinish: true, depth: 0 }).on('all', (event, path) => {
    if(path.endsWith('.js')) {
        console.log(`${path} changed. Restarting Passenger.`);
        exec('touch tmp/restart.txt');
    }
});
*/

// Make sure we can get requests from other places.
app.use(cors());

// Serve any static builds from the SPA build
app.use(express.static(path.join(__dirname, 'website/build')));

// Handle any requests for data
app.use('/data/projects', projects);

// All other requests go to the index.html from the compiled SPA
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'website/build/index.html'));
});

app.listen(port);
console.log('LOST.IN.SPACEBAR backend is up and running.');