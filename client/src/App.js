import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login"
import Invoices from "./components/Invoices"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Account from "./components/Account"

function App() {

 
  const [currentUser, setCurrentUser]= useState({})
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  

  if(!login) {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/login" component={()=><Login login = {setLogin} currentUser={setCurrentUser}  setUser={setUser} />} />
              <Route path='/' component={()=><Login login = {setLogin} setUser={setUser}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/login" component={()=><Login login = {setLogin} currentUser={setCurrentUser}  setUser={setUser} />} />
            <Route path="/signup" component={()=><Signup user = {setUser} login = {setLogin}/>} />
            <Route path="/login" component={()=><Login login = {setLogin} setUser={setUser} setCurrentUser={setCurrentUser} />} />
            <Route path= '/home' component={() =><Home user = {setUser} login = {setLogin} />}/>
            <Route path= '/account' component={() =><Account login = {setLogin} currentUser={setCurrentUser}  />}/>
            <Route path='/' component={()=><Login login = {setLogin} setUser={setUser}/>} />
          
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );

}

export default App;
