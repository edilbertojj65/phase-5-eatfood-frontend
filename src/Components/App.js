
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Photos from './Photos';
import Reviews from './Reviews';
import Users from './Users';
import Groups from './Groups';
import Login from './Login';
import GroupsUser from './GroupsUser';
import { useState, useEffect } from "react";
import Header from "./Header";


function App() {
  const [user, setUser] = useState(null);
  debugger
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
       <Header user={user} onLogout={handleLogout} />
      <Router>
        <div>
          <nav>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/groups">Groups</NavLink>
            <NavLink to="/group_users">Groups User</NavLink>
          </nav>

           
          <Switch>
          <Route exact path="/">
            <Login onLogin={handleLogin} />
            </Route>
            <Route exact path="/Photos">
              <Photos />
            </Route>

            <Route exact path="/Login">
            <Login onLogin={handleLogin} />
            </Route>

            <Route exact path="/Reviews">
              <Reviews />
            </Route>

            <Route exact path="/Users">
              <Users />
            </Route>
            <Route exact path="/groups">
              <Groups />
            </Route>
            <Route exact path="/group_users">
              <GroupsUser />
            </Route>
            
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;