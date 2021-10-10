import { useEffect, useState } from "react";
import Search from "./Search";
import NewUserForm from "./NewUserForm";
import UserList from './UserList';

 
function Users () {
  const [users, setUsers] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
   
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersArray) => {
        setUsers(usersArray);
      });
  }, [] );


  function handleAddUser(newUser) {
    const updatedusersArray = [...users, newUser];
    setUsers(updatedusersArray);
  }

  function handleDeleteUser(id) {
    const updatedusersArray = users.filter((user) => user.id !== id);
    setUsers(updatedusersArray);
  }

  function handleUpdateUser(updatedUser) {
    const updatedusersArray = users.map((user) => {
      return user.id === updatedUser.id ? updatedUser : user;
    });
    setUsers(updatedusersArray);
  }
 
  const displayedUser = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


return(
 <main>
       <NewUserForm onAddUser={handleAddUser} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <UserList
        users={displayedUser}
        onDeleteUser={handleDeleteUser}
        onUpdatUser={handleUpdateUser}
      />
    </main>
  );
}

export default Users;