import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { projectInfo, projectMeta} from '../content/projectInformation';

export default class Projects extends Component {
    buildProjectComponents() {
        const projects = [];

        // loops through information and build link that passes info
        // to the component to build out the project page
        for (const path of projectMeta) {
            // const linkDestination = {
            //     pathname: 'projects/' + path,
            //     state: {
            //         name: path,
            //         content: projectInfo[path].content
            // }};

            const linkDestination = projectInfo[path].repo;

            projects.push(
                <article>
                    <a className='image' href={linkDestination}>
                        <img 
                        src={projectInfo[path].imagePath}
                        alt={'Image showing a screen capture of ' + projectInfo[path].projectName} 
                        />
                    </a>
                    <h3>{projectInfo[path].projectName}</h3>
                    <p>{projectInfo[path].content}</p>
                    <ul class="actions">
                        <li><a className='button' href={linkDestination}>See GitHub repository</a></li>
                    </ul>
                </article>
            );
        }

        return projects;
    }

    render() {
        return (
            <section>
                <header className='major'>
                    <h2>Projects</h2>
                </header>
                <div class='posts'>{this.buildProjectComponents()}</div>
            </section>
        )
    }
}