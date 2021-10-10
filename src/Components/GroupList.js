import GroupCard from './GroupCard';
debugger
function GroupList({ groups, onDeleteGroup, onUpdateGroup}){
  debugger
    return (
    
        <ul className="cards">
          {groups.map((group) => {
            return (
               <GroupCard
                key={group.id}
                group={group}
                onDeleteGroup={onDeleteGroup}
                onUpdateGroup={onUpdateGroup}
              />
            );
          })}
        </ul>
      );





}

export default GroupList;
