import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import menuLinks from './Navbar/menuData';

function App() {
  return (
    <Router>
      <div className="App">    
        <Navbar />
          <Switch>
            {menuLinks.map((link)=>{
              return (
                <Route exact path={link.url}>
                  {link.route}
                </Route>
              )
            })}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
