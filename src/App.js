import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Project from './components/Projects';
import Education from './components/Education';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
      <BrowserRouter>
        <div className='App'>
          <div id='wrapper'>

            <div id='main'>
              <div className='inner'>

                <Header />
                
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Project} />
                <Route path='/education' component={Education} />
              </div>

            </div>

            <Sidebar />

          </div>
        </div>
      
      </BrowserRouter>
    
  );
}

export default App;
