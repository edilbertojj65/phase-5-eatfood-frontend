import { useEffect, useState } from "react";
import Search from "./Search";
import NewGroupForm from "./NewGroupForm";
import GroupList from './GroupList';

debugger
function Groups () {
  const [groups, setGroups] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
  debugger
  useEffect(() => {
    fetch("/groups")
      .then((r) => r.json())
      .then((groupsArray) => {
        setGroups(groupsArray);
      });
  }, [] );


  function handleAddGroup(newGroup) {
    const updatedgroupsArray = [...groups, newGroup];
    setGroups(updatedgroupsArray);
  }

  function handleDeleteGroup(id) {
    const updatedgroupsArray = groups.filter((group) => group.id !== id);
    setGroups(updatedgroupsArray);
  }

  function handleUpdateGroup(updatedGroup) {
    const updatedgroupsArray = groups.map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });
    setGroups(updatedgroupsArray);
  }
debugger
  const displayedGroup = groups.filter((group) => {
    return group.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


return(
 <main>
       <NewGroupForm onAddGroup={handleAddGroup} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <GroupList
        groups={displayedGroup}
        onDeleteGroup={handleDeleteGroup}
        onUpdatGroup={handleUpdateGroup}
      />
    </main>
  );
}

export default Groups;