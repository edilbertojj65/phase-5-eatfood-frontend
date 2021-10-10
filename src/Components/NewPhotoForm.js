import { useState } from "react";

function NewPhotoForm({onAddPhoto}){
debugger
    const [namePhoto, setName] = useState("");
    const [url, setUrl] = useState("");
    const [fileName , setFilename] = useState("");
    const [user_id , setUser] = useState("");
    const [group_user_id , setGroup] = useState("");

debugger
    function handleSubmit(e) {
      debugger
        e.preventDefault();
        fetch("/photos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            namePhoto: namePhoto,
            url: url,
            fileName: fileName,
            user_id: user_id,
            group_user_id: group_user_id,
            
          }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
          } 
           return null;
         
          }).then((newPhoto) => onAddPhoto(newPhoto));
      }


      return (
        <div className="new-photo-form">
        <h2>New Photo</h2>
        <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="namePhoto"
         placeholder="Name Photo"
         value={namePhoto}
         onChange={(e) => setName(e.target.value)}
    
         />

         <input
         type="text"
         name="url"
         placeholder=" URL"
         value={url}
         onChange={(e) => setUrl(e.target.value)}

         />
         <input
         type="text"
         name="fileName"
         placeholder="Original Name"
         value={fileName}
         onChange={(e) => setFilename(e.target.value)}

         />

         <input
         type="text"
         name="user_id "
         placeholder="User Id"
         value={user_id }
         onChange={(e) => setUser(e.target.value)}

         />

         <input
         type="text"
         name="group_user_id "
         placeholder="User Group"
         value={group_user_id }
         onChange={(e) => setGroup(e.target.value)}

         />
    
        <button type="submit">Add Photo</button>
        </form>
    
    
        </div>
    );
    
   
    
    
    
    
    
    

}

export default NewPhotoForm;