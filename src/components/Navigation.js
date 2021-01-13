import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <header className='app-logo'>
                <span></span>
                <Link to='/'>Miranda Tran</Link>
            </header>
        )
    }
}