import React, { Component } from 'react';
import { Link, NavLink }  from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <section id="header">
				<header>
					<h1 id="logo">Miranda Tran</h1>
					<p>I got reprogrammed by a rogue AI<br />
					and now I'm totally cray</p>
				</header>
				<nav id="nav">
					<ul>
						<li><NavLink exact to='/'>Home</NavLink></li>
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