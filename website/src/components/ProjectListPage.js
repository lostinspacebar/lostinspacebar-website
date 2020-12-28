import ProjectList from "./ProjectList";
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProjectDetailsPage from "./ProjectDetailsPage";

export default function ProjectListPage() {
    return (
        <Switch>
            
            <Route path="/projects/:projectId" component={ProjectDetailsPage} />
            <Route path="/projects">
                <ProjectList />
            </Route>
        </Switch>
    );
}