import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects';
import Education from './components/Education';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Project from './components/Project';

function App() {
  return (
    
      <Router>
        <div className='App'>
          <div id='wrapper'>

            <div id='main'>
              <div className='inner'>

                <Header />
                
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/education' component={Education} />
                <Route exact 
                  path='/projects/:name' 
                  render={(props) => (
                    <Project {...props} name={props.match.params.name} />
                  )} 
                />
              </div>

            </div>

            <Sidebar />

          </div>
        </div>
      
      </Router>
    
  );
}

export default App;
