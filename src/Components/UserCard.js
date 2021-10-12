

function UserCard({user, onDeleteUser, onUpdateUser }){
    const{id , name , email, dateObird} = user;
debugger
    function handleDeleteClick() {
        fetch(`/users/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteUser(id);
          }
        });
      }


    //   function handleIsInStockClick() {
    //     fetch(`/photos/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email: email }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedUser) => {
    //         onUpdateUser(updatedUser);
    //       });
    //   }



      return (
        <li className="CardUser">
          {/* <img src={url} alt={fileName} /> */}
          <h4>Name User: {id} {name} </h4>
          <p>Email: {email} </p>
          <p>Date of Bird: {dateObird} </p>      
                
          <button onClick={handleDeleteClick}>Delete</button>
        </li>
      );

}

export default UserCard;