import React, { Component } from 'react';
import { Link, NavLink }  from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <section id="header">
				<header>
					<h1 id="logo"><NavLink exact to='/'>Miranda Tran</NavLink></h1>
					<p>MSCS student at Northeastern, seeking co-op/internship for Summer/Fall 2021.<br />
                    Enjoys learning about new technologies, Twitch, and making dinner rolls.</p>
				</header>
				<nav id="nav">
					<ul>
						<li><NavLink to='/projects'>Projects</NavLink></li>
						<li><NavLink to='/education'>Education</NavLink></li>
						<li><NavLink to='googmle.com'>Contact</NavLink></li>
					</ul>
				</nav>
				<footer>
					<ul class="icons">
						<li><Link to='google.com' class="icon brands fa-twitter"><span class="label">Twitter</span></Link></li>
						<li><Link to='google.com' class="icon brands fa-facebook-f"><span class="label">Facebook</span></Link></li>
						<li><Link to='google.com' class="icon brands fa-instagram"><span class="label">Instagram</span></Link></li>
						<li><Link to='google.com' class="icon brands fa-github"><span class="label">Github</span></Link></li>
						<li><Link to='google.com' class="icon solid fa-envelope"><span class="label">Email</span></Link></li>
					</ul>
				</footer>
			</section>
        )
    }
}