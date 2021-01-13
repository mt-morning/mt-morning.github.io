import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Project from './components/Projects';
import Education from './components/Education';
import Navigation from './components/Navigation';

function App() {
  return (
    
      <BrowserRouter>
        <div className='App'>
          <Navigation />

          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Project} />
          <Route path='/education' component={Education} />
        </div>
      
      </BrowserRouter>
    
  );
}

export default App;
