import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login"
import Invoices from "./components/Invoices"
import Signup from "./components/Signup"
import Home from "./components/Home"

function App() {

  // state= {
  //   usersInvoices: [],
  // }
  
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(setUsers)
  },[])

  // if(!login) {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/signup" component={()=><Signup user = {user} setUser = {setUser}/>} />
              <Route path="/login" component={()=><Login login = {setLogin} setUser={setUser} />} />
              <Route path= '/home' component={() =><Home user = {user} users = {users}/>}/>
              <Route path='/' component={()=><Login login = {setLogin} setUser={setUser}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
// }

  // return (
  //   <Home/>
  // );

}

export default App;
