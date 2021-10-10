import { Link } from "react-router-dom";
 

function Logout({ user, onLogout }) {
    debugger
  function handleLogout() {
      debugger
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
   
    <header>
       {user ? (
        <div> 
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/Login">Click Here to Login</Link>
       
      )}
    </header>
     
  );
}

export default Logout;