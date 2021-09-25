import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import menuLinks from './Navbar/menuData';

function App() {
  return (
    <Router>
      <div className="App">    
        <Navbar />
        <header className="App-header">
          <Switch>
            {menuLinks.map((link)=>{
              return (
                <Route exact path={link.url}>
                  {link.route}
                </Route>
              )
            })}
            {/* <Route path={menuLinks.}>
              <Features />
            </Route>
            <Route path={menuLinks.}>
              <Pricing />
            </Route>
            <Route path={menuLinks.}>
              <About />
            </Route>
            <Route path={menuLinks.}>
              <Login />
            </Route> */}
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
