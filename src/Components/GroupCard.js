
function GroupCard({group, onDeleteGroup, onUpdateGroup }){
    const{id , name , typeName, user_id} = group;
debugger
    function handleDeleteClick() {
        fetch(`/groups/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteGroup(id);
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
        <li className="card">
          {/* <img src={url} alt={fileName} /> */}
          <h4>Name Group: {id} {name} </h4>
          <p>type Name: {typeName} </p>
          <p>User id: { user_id} </p>      
                
          <button onClick={handleDeleteClick}>Delete</button>
        </li>
      );

}

export default GroupCard;