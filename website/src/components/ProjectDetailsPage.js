import './ProjectDetailsPage.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { trackPromise} from 'react-promise-tracker'
import { LoadingSpinner } from './LoadingSpinner';

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
        trackPromise(
            fetch(`${process.env.REACT_APP_API_URL}/projects/${this.props.match.params.projectId}`)
                .then(response => response.json())
                .then(data => this.setState({ projectDetails : data}))
            , 'project-details');
    }

    render() {
        const logo_alt = `${this.state.projectDetails.title} logo.`;
        var githubLink = '';
        if(this.state.projectDetails.githubUrl) {
            githubLink = <a href={this.state.projectDetails.githubUrl} title='Source Code on GitHub'>GitHub</a>
        }
        var websiteLink = '';
        if(this.state.projectDetails.websiteUrl) {
            websiteLink = <a href={this.state.projectDetails.websiteUrl} title='Project Website'>Website</a>
        }
        return <div>
            <div className='back-link'><Link to='/projects'>&laquo; back to all projects</Link></div>
            <LoadingSpinner area='project-details' />
            <div className='project-details'>
                <img className='details-logo' src={this.state.projectDetails.logo} alt={logo_alt} title={logo_alt} />
                <div className='details-info-box' style={{ backgroundImage: `url('${this.state.projectDetails.logo}')` }}>
                    <span className='details-info-box-text'>
                        {githubLink}
                        {websiteLink}
                    </span>
                </div>
                <span className='details-brief' dangerouslySetInnerHTML={{__html: this.state.projectDetails.brief }} />
                <span dangerouslySetInnerHTML={{__html: this.state.projectDetails.body }} />
            </div>
        </div>
    }
}