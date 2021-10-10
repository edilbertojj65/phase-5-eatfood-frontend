import { useState } from "react";

function NewReviewForm({onAddReview}){
debugger
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [photo_id , setPhoto] = useState("");
    const [group_user_id, setGroup] = useState("");
debugger
    function handleSubmit(e) {
      debugger
        e.preventDefault();
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comment,
            rating: rating,
            photo_id: photo_id,
            group_user_id: group_user_id,
            
          }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
          } 
           return null;
         
          }).then((newReview) => onAddReview(newReview));
      }


      return (
        <div className="new-review-form">
        <h2>New review</h2>
        <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="comment"
         placeholder= "Comment"
         value={comment}
         onChange={(e) => setComment(e.target.value)}
    
         />

         <input
         type="text"
         name="rating"
         placeholder="Type Rate"
         value={rating}
         onChange={(e) => setRating(e.target.value)}

         />
         <input
         type="text"
         name="photo_id"
         placeholder="Photo Id"
         value={photo_id}
         onChange={(e) => setPhoto(e.target.value)}

         />

         <input
         type="text"
         name="group_user_id"
         placeholder="User Group"
         value={group_user_id}
         onChange={(e) => setGroup(e.target.value)}

         /> 
    
        <button type="submit">Add review</button>
        </form>
    
    
        </div>
    );
    
   
    
    
    
    
    
    

}

export default NewReviewForm;