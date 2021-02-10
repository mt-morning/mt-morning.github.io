import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <>
                <section>
                    <header className='main'>
                        <h1>About Me</h1>
                    </header>
                </section>

                <span className='image main'>
                    <img src='images/miranda.jpg' alt='Professional headshot' />
                </span>

                <hr className='major' />
                <p>Hi! My name is Miranda Tran and I am currently a Master of Computer Science 
                    (MSCS) student at Northeastern University through Align! This program is 
                    a pathway for non-CS majors—an English major and Education minor like me!—to 
                    learn more about the computer science industry 
                    and learn the requisite skills and technologies to succeed in this field.</p>
                <div className='row'>
                    <div className='col-6 col-12-small'>
                        <h3>Academics</h3>
                        <p>In my studies so far, some of the coursework I have completed so far include:
                            <ul>
                                <li>Natural Language Processing (CS6120)</li>
                                <li>Web Development (CS5610)</li>
                                <li>Foundations of Software Engineering (CS5500)</li>
                                <li>...and so on!</li>
                            </ul>
                            Currently, I am studying Database Managment Systems (CS5200) and UI Development (CS7580).</p>
                    </div>

                    <div className='col-6 col-12-small'>
                        <h3>My Journey to Computer Science</h3>
                        <p>At the end of my junior year of college, a representative from the Align program came 
                            to speak at my school about this bridge program. In the fall, I enrolled in an introductory 
                            computer science course and excelled in the coursework. More so, I found that I enjoyed the process 
                            of solving a problem, incrementally and programmatically! With the encouragement of my professors, 
                            I applied for and entered the Align program and I am grateful that I have this opportunity to develop a strong foundation 
                            in computer science and hopefully combine my own love of English into my future career.
                        </p>
                    </div>
                </div>
                    
                <hr className='major' />
                
                <p>To see some of my work, be sure to check out the projects section and my GitHub!</p>
                <div className='box'>
                    <p>Finally, I am looking for an internship or co-op (Summer/Fall 2021) to apply the skills I have learned 
                    and to learn or expand my knowledge of new technologies! Please contact me for any opportunities through 
                    my LinkedIn or through my email!
                    </p>
                </div>
                
            </>
        )
    }
}