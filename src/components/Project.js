import React, { Component } from 'react';
import projecInfo from '../content/projectInformation';

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
        if (!this.props.location.state.content) {

        }

        return (
            <section>
                <header className='main'>
                    <h1>{this.state.name}</h1>
                </header>

                {this.props.location.state.content}
            </section>            
        )
    }
}