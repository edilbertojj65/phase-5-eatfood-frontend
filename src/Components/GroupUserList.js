import GroupUserCard from './GroupUserCard';
debugger
function GroupUserList({ groups_users, onDeleteGroup_user, onUpdateGroup_user}){
  debugger
    return (
    
        <ul className="cards">
          {groups_users.map((group_user) => {
            return (
               <GroupUserCard
                key={group_user.id}
                group_user={group_user}
                onDeleteGroup_user={onDeleteGroup_user}
                onUpdateGroup_user={onUpdateGroup_user}
              />
            );
          })}
        </ul>
      );





}

export default GroupUserList;