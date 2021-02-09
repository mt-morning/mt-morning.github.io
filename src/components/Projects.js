import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {projectInfo} from '../content/projectInformation';

export default class Projects extends Component {
    buildProjectComponenets() {
        const projects = [];

        // loops through information and build link that passes info
        // to the component to build out the project page
        for (const project of projectInfo) {
            const linkDestination = {
                pathname: 'projects/' + project.path,
                state: {
                    name: project.projectName,
                    content: project.content
            }};
            projects.push(
                <article>
                    <img src={project.imagePath} alt={'Image showing a screen capture of ' + project.projectName} />
                    <Link to={linkDestination}>{project.projectName}</Link>
                </article>
            );
        }

        return projects;
    }

    render() {
        console.log(projectInfo);
        return (
            <section>
                <header className='major'>
                    <h2>Projects</h2>
                </header>
                <div class='posts'>{this.buildProjectComponenets()}</div>
            </section>
        )
    }
}