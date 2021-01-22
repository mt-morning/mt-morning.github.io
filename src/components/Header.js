import React, { Component } from 'react';
import { NavLink, Link }  from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
			<header id='header'>
                <NavLink to='/' className='logo'><strong>Miranda</strong> Tran</NavLink>
                <ul className='icons'>
                    <li><a href='https://www.linkedin.com/in/mirandamytran/' className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    <li><a href='https://github.com/mt-morning' className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href='mailto: tran.mir@northeastern.edu' className="icon brands fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </header>
        )
    }
}