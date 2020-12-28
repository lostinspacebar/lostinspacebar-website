import './ProjectList.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/projects`)
            .then(response => response.json())
            .then(data => this.setState({ projects : data}))
    }

    render() {
        return <div className="project-listing">
            {this.state.projects.map(project => 
                <div key={project.id} className="project-thumb">
                    <Link to={project.url} style={{ backgroundImage: `url('${project.thumb.replace("{state}", "bg")}')` }}>
                        <div className="hover-image" style={{ backgroundImage: `url('${project.thumb.replace("{state}", "hover")}')` }}></div>
                        <div className="title">{project.title}</div>
                        <div className="description">{project.description}</div>
                    </Link>
                </div>
            )}
        </div>
    }

    fadeIn
}