
import {  BrowserRouter as Router } from "react-router-dom" ; 
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Photos from './Photos';
import Reviews from './Reviews';
import Users from './Users' ;
import Groups from './Groups';
import Login from './Login';
import Logout from './Logout';
import GroupsUser from './GroupsUser';


function App() {

    return (
    <div className="App">
      <Router>
     <div>
       <nav>
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/logout">Logout</NavLink>
         <NavLink to="/photos">Photos</NavLink>
         <NavLink to="/reviews">Reviews</NavLink>
         <NavLink to="/users">Users</NavLink>
         <NavLink to="/groups">Groups</NavLink>
         <NavLink to="/group_users">Groups User</NavLink>
        </nav>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route exact path="/Photos">
           <Photos />
         </Route>

         <Route exact path="/Login">
           <Login />
         </Route>

         <Route exact path="/Logout">
           <Logout />
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
         <Route exact path="/">
           <Reviews />
         </Route>
       </Switch>
     </div>
   </Router> 
      
   </div>
 );
}

export default App;