import { useState  } from "react";

function NewGroupForm({ onAddGroup}){
 
    const [name, setName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [user_id , setUser] = useState();



    function handleSubmit(e) {
       
        e.preventDefault();
        fetch("/groups", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            typeName: typeName,
            user_id:  user_id,
            
          }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
          } 
           return null;
         
          }).then((newGroup) => onAddGroup(newGroup));
      }


      return (
        <div className="new-group-form">
        <h2>New Group</h2>
        <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="name"
         placeholder="Name Group"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
        <input
         type="text"
         name="typeName"
         placeholder="Type Name"
         value={typeName}
         onChange={(e) => setTypeName(e.target.value)}
        /> 
      <input
         type="text"
         name="user_id"
         placeholder="User Id"
         value={user_id}
         onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Add Group</button>
        </form>
    
    
        </div>
    );
    
   
    
    
    
    
    
    

}

export default NewGroupForm;