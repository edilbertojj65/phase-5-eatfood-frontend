import { useState  } from "react";

function NewGroupUserForm({ onAddGroup_user}){
 
     
    const [group_id, setGroup ] = useState("");
    const [name, setName ] = useState("");
     

    function handleSubmit(e) {
       
        e.preventDefault();
        fetch("/group_users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           group_id: group_id,
            name: name,
             
            
          }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
          } 
           return null;
         
          }).then((newGroup_users) => onAddGroup_user(newGroup_users));
      }


      return (
        <div className="new-group_user-form">
        <h2>New Group User</h2>
        <form onSubmit={handleSubmit}>
        

        <input
         type="text"
         name="group_id"
         placeholder="Group  Id"
         value={group_id}
         onChange={(e) => setGroup (e.target.value)}
    
         /> 
         <input
         type="text"
         name="name"
         placeholder="Name Group "
         value={name}
         onChange={(e) => setName (e.target.value)}
    
         /> 


        <button type="submit">Add Group</button>
        </form>
    
    
        </div>
    );
    
   
    
    
    
    
    
    

}

export default NewGroupUserForm;