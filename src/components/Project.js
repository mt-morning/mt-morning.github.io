import React, { Component } from 'react';
import { projectInfo } from '../content/projectInformation';

/**
 * Currently, the image doesn't render, so ...
 */
export default class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
        }
    }

    componentDidMount() {
        const { name } = this.props.location.state;

        this.setState({ name });
    }

    render() {
        const projectName = this.state.name;
        let project;
        if (projectName !== null) {
            project = projectInfo[projectName]
        }
        let projectImage = project ? <img src={project.imagePath} alt=''/> : null

        return (
            <section>
                <header className='main'>
                    <h1>{project ? project.projectName : null}</h1>
                </header>

                {project ? project.content : null}
                {projectImage}
                <img src={'images/inventorymanager_resized.png'} alt=''/>
            </section>            
        )
    }
}