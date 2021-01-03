const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const projectsDir = path.join(process.cwd(), '/data/projects');
const marked = require('marked');

router.get('/', (request, response) => {
    var entries = fs.readdirSync(projectsDir, { withFileTypes : true });
    var projects = [];
    entries.forEach(entry => {
        if(entry.isDirectory()) {
            var project = require(path.join(projectsDir, entry.name, 'project.json'));
            projects.push(project);
        }
    });
    response.send(projects);
});

router.get('/:projectId', (request, response) => {
    const fullMarkdownLines = fs.readFileSync(path.join(projectsDir, request.params.projectId, 'index.md'), 'utf8').split('\n');
    var briefMarkdownTokens = fullMarkdownLines[0].split(' ');
    briefMarkdownTokens[0] = `<span class='first-word'>${briefMarkdownTokens[0]}</span>`
    const briefMarkdown = briefMarkdownTokens.join(' ');
    const mainBodyMarkdown = fullMarkdownLines.slice(1).join('\n');
    const renderedBrief = marked(briefMarkdown);
    const renderedMainBody = marked(mainBodyMarkdown);
    const projectInfo = require(path.join(projectsDir, request.params.projectId, 'project.json'));
    var projectDetails = {
        "logo": `/images/projects/${request.params.projectId}/thumb_hover.png`,
        "brief": renderedBrief,
        "body": renderedMainBody
    }
    response.send(Object.assign({}, projectInfo, projectDetails));
});

module.exports = router;