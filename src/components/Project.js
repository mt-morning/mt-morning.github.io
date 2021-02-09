import React, { Component } from 'react';

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
        return (
            <div>
                {this.state.name}! <br />
                {this.props.location.state.content}
            </div>
        )
    }
}