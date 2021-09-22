import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
