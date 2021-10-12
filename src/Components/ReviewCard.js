
function ReviewCard({review, onDeleteReview, onUpdateReview }){
    const{id , comment , rating, photo_id, group_user_id, } = review;
    const { url ,fileName } = review.photo
   debugger
    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteReview(id);
          }
        });
      }


      // function handleIsInStockClick() {
      //   fetch(`/photos/${id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ url: url }),
      //   })
      //     .then((r) => r.json())
      //     .then((updatedPhoto) => {
      //       onUpdatePhoto(updatedPhoto);
      //     });
      // }

      return (
        <li className="card">
          <img src={url} alt={fileName} />
          <h4>Comment Text: { comment} </h4>
          <p>rating Value: {rating} </p>
          <p>photo_id Value: {photo_id} </p>
          <p>User Group: {group_user_id} </p>
                 
                
          <button onClick={handleDeleteClick}>Delete</button>
        </li>
      );

}

export default ReviewCard;