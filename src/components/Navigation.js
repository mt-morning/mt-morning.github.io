import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <header className='app-logo'>
                <Link to='/' className='logo'>Miranda Tran</Link>
                <Link to='/education' className='header-item'>Education</Link>
                <Link to='/projects' className='header-item'>Projects</Link>
            </header>
        )
    }
}