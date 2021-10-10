import { useState } from "react";

function NewUserForm({ onAddUser}){
debugger
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateObird , setDate] = useState("");
 
    function handleSubmit(e) {
      debugger
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            dateObird: dateObird,
             
            
          }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
          } 
           return null;
         
          }).then((newUser) => onAddUser(newUser));
      }


      return (
        <div className="new-user-form">
        <h2>New User</h2>
        <form onSubmit={handleSubmit}>


         <input
         type="text"
         name="name"
         placeholder="Name User"
         value= {name}
         onChange={(e) => setName(e.target.value)}
    
         />

         <input
         type="text"
         name="email"
         placeholder="Type Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}

         />
         <input
         type="date"
         name="dateObird"
         placeholder="Date of Bird"
         value={dateObird}
         onChange={(e) => setDate(e.target.value)}

         />
    
        <button type="submit">Add User</button>
        </form>
    
    
        </div>
    );
    
   
    
    
    
    
    
    

}

export default NewUserForm;