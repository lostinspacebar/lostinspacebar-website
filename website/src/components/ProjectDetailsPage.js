import './ProjectDetailsPage.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectDetails: {
                "logo": '',
                "brief": '',
                "body": ''
            }
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/data/projects/${this.props.match.params.projectId}`)
            .then(response => response.json())
            .then(data => this.setState({ projectDetails : data}))
    }

    render() {
        const logo_alt = `${this.state.projectDetails.title} logo.`;
        return <div>
            <div className='back-link'><Link to='/projects'>&laquo; back to all projects</Link></div>
            <div className='project-details'>
                <img className='details-logo' src={this.state.projectDetails.logo} alt={logo_alt} title={logo_alt} />
                <span className='details-brief' dangerouslySetInnerHTML={{__html: this.state.projectDetails.brief }} />
                <span dangerouslySetInnerHTML={{__html: this.state.projectDetails.body }} />
            </div>
        </div>
    }
}