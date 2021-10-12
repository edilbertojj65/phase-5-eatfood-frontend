function Group_userCard({group_user, onDeleteGroup_user, onUpdateGroup_user }){
    const{id ,name,  group_id} = group_user;
debugger
    function handleDeleteClick() {
        fetch(`/group_users/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteGroup_user(id);
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
          <h4>Group User Id: {id}   </h4>
          <p>Group Id: {group_id} </p>
          <p>Group Name: {name} </p>
              
                
          <button onClick={handleDeleteClick}>Delete</button>
        </li>
      );

}

export default Group_userCard;