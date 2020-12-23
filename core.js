/**
 * Website core. This loads up the requested page and renders it from markdown.
 */

const express = require('express');
const fs = require('fs');

class Core
{
    constructor(app, config, filesDir, pagesDir, themesDir) {
        this.config = config;
        this.filesDir = filesDir;
        this.pagesDir = pagesDir;
        this.themeDir = themesDir + '/' + config.theme;

        // Setup static resources
        app.use('/files', express.static(this.filesDir));
        app.use('/theme/images', express.static(this.themeDir + '/images'))
        app.use('/theme/css', express.static(this.themeDir + '/css'))
        app.use('/theme/js', express.static(this.themeDir + '/js'))
    }

    handleRequest(request, response) {
        var url = request.url;
        var urlTokens = url.split('/').filter(x => x);
        
        // Load layout template
        var layout = this.loadLayout();

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(layout);
        response.end();
    }

    loadLayout() {
        return fs.readFileSync(this.themeDir + '/layout.html');
    }

    send404() {

    }
}

module.exports = Core;