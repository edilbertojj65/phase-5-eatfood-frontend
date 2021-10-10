import { useEffect, useState } from "react";
import Search from "./Search";
import NewGroupUserForm from "./NewGroupUserForm";
import GroupUserList from './GroupUserList';

debugger
function GroupsUser() {
  const [groups_users, setGroups_user] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
  debugger
  useEffect(() => {
    fetch("/group_users")
      .then((r) => r.json())
      .then((groups_usersArray) => {
        setGroups_user(groups_usersArray);
      });
  }, [] );


  function handleAddGroup_users(newGroup_users) {
    const updatedgroup_usersArray = [...groups_users, newGroup_users];
    setGroups_user(updatedgroup_usersArray);
  }

  function handleDeleteGroup_user(id) {
    const updatedgroup_usersArray = groups_users.filter((group_user) => group_user.id !== id);
    setGroups_user(updatedgroup_usersArray);
  }

  function handleUpdateGroup_user(updatedGroup_user) {
    const updatedgroup_usersArray = groups_users.map((group_user) => {
      return group_user.id === updatedGroup_user.id ? updatedGroup_user : group_user;
    });
    setGroups_user(updatedgroup_usersArray);
  }
debugger
  const displayedGroup_user = groups_users.filter((group_user) => {
    return group_user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


return(
 <main>
       <NewGroupUserForm onAddGroup_user={handleAddGroup_users} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <GroupUserList
        groups_users={displayedGroup_user}
        onDeleteGroup_user={handleDeleteGroup_user}
        onUpdatGroup_user={handleUpdateGroup_user}
      />
    </main>
  );
}

export default GroupsUser ;