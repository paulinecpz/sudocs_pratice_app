import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's build a draft of Sudocs.
        </p>
      </header>
    </div>
  );
}

export default App;
