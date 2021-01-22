import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Project from './components/Projects';
import Education from './components/Education';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    
      <BrowserRouter>
        <div className='App'>
          <div id='wrapper'>

            <div id='main'>
              <div className='inner'>
                
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Project} />
                <Route path='/education' component={Education} />
              </div>

            </div>

            <Header />

          </div>
        </div>
      
      </BrowserRouter>
    
  );
}

export default App;
