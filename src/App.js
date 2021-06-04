import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import FormSignupDetails from './components/Form/FormSignupDetails';
import StudentHome from './components/StudentHome/StudentHome';
import Signup from './components/Login/Signup';
import SignupDetails from './components/Login/Signupdetails';
import Home from './components/Home/Home';
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
            
            <Route exact path="/" >
              <Login/>
            </Route>
            <Route path="/login" >
              <Login/>
            </Route>
            <Route path="/signup" >
              <Signup/>
            </Route>
            <Route path="/signup-details" >
              <SignupDetails/>
            </Route>
            <Route path="/student-home">
              <StudentHome/>
            </Route>
          
            
             
          </Switch>
    </div>
    </Router>
  );
}

export default App;
