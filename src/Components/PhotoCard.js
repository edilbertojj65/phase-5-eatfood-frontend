

function PhotoCard({photo, onDeletePhoto, onUpdatePhoto }){
    const{id , namePhoto , url, fileName, user_id, group_user_id} = photo;
 
    function handleDeleteClick() {
        fetch(`/photos/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeletePhoto(id);
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
          <h4>Name Photo: {id} {namePhoto} </h4>
          <p>Original Name: {fileName} </p>
          <p>User Id: {user_id} </p>
          <p>Code Group: {group_user_id} </p>
                 
                
          <button onClick={handleDeleteClick}>Delete</button>
        </li>
      );

}

export default PhotoCard;