import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <>
                <section id='banner'>
                    <div className='content'>
                        <header>
                            <h1>Education</h1>
                        </header>
                    </div>
                </section>

                <section>
                    <header className='major'>
                        <h2>Northeastern University</h2>
                    </header>

                    <div className="features">
                        <article>
                            <span className="icon fa-building"></span>
                            <div className="content">
                                <h3>About</h3>
                                <p>Location: Boston, MA. <br />
                                Expected Graduation: Fall 2021 or Spring 2022</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-folder-open"></span>
                            <div className="content">
                                <h3>Current Coursework</h3>
                                <ul>
                                    <li>UI Development (CS7580)</li>
                                    <li>Database Management Systems (CS5200)</li>
                                </ul>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-folder"></span>
                            <div className="content">
                                <h3>Courses</h3>
                                <ul>
                                    <li>Foundations of Software Engineering (CS5500)</li>
                                    <li>Web Development (CS5610)</li>
                                    <li>Natural Language Processing (NLP) (CS6120)</li>
                                    <li>Algorithms (CS5800)</li>
                                    <li>Object Oriented Design (CS5004)</li>
                                    <li>...and others!</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                <section>
                    <header className='major'>
                        <h2>Wellesley College</h2>
                    </header>

                    <div className="features">
                        <article>
                            <span className="icon fa-building"></span>
                            <div className="content">
                                <h3>About</h3>
                                <p>Location: Wellesley, MA. <br />
                                Graduated: Fall 2021 or Spring 2022</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-folder"></span>
                            <div className="content">
                                <h3>Courses</h3>
                                <ul>
                                    <li>Computer Programming and Problem Solving (CS111)</li>
                                    <li>Data Structures (CS230)</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                <section>
                    <header className='major'>
                        <h2>Stuyvesant High School</h2>
                    </header>
                    <div className="features">
                        <article>
                            <span className="icon fa-building"></span>
                            <div className="content">
                                <h3>About</h3>
                                <p>Location: New York, NY. <br />
                                Graduated: May 2019</p>
                            </div>
                        </article>
                    </div>
                </section>
            </>
        )
    }
}