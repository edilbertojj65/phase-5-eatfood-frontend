import { useState } from "react";
// import { Link } from "react-router-dom";
 
function Login({ onLogin }) {
  const [name, setUser_name] = useState("");
 

  function handleSubmit(e) {
    
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }  ).then((r) => {
      if (r.ok) {
        return r.json();
      }
      return null;
    }  ).then((user) => onLogin(user));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login With User name</h3>
      <label htmlFor="user_name">User Name: </label>
      <input
        type="text"
         id="name"
        value={name}
        onChange={(e) => setUser_name(e.target.value)}
      />
      <button type="submit">Login</button>
       
        
    </form>
  );
}

export default Login;