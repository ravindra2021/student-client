
import Home from './Home';
import Login from'./Login';
import About from'./About';

import Register from './Register';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
            <Route path="/" exact={true}>
              <Home/>
            </Route>
           
            <Route path="/Login" >
              <Login/>
            </Route>
            <Route path="/About" >
              <About/>
            </Route>
            
            
            
            <Route path="/Home">
              <Home/>
            </Route>
           
            
                   
          </Switch>
    </div>
    </Router>
  );
}

export default App;
