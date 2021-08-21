import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
