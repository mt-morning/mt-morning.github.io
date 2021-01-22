import { Component } from 'react';
import { NavLink }  from 'react-router-dom';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }
    render() {
        return(
            <div onClick={this.onClick} className='toggle'>Toggle</div>
        );
    }
}

export default class Header extends Component {
    constructor() {
        super()
        // super(props);
        // this.addActiveClass = this.addActiveClass.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state.active);
    }

    render() {
        return(
            <div id='sidebar' className={this.state.active ? 'active' : 'inactive'}>
                <div className='inner'>
                    <nav id='menu'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                    </nav>

                    <footer id="footer">
                        <p className="copyright">Miranda Tran, 2021. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </footer>
                </div>
                <Toggle onClick={() => { this.toggleClass(); this.forceUpdate(); }}/>
            </div>
        );
    }
}