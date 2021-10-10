import UserCard from './UserCard'
debugger
function UserList({ users, onDeleteUser, onUpdateUser}){
  debugger
    return (
    
        <ul className="cards">
          {users.map((user) => {
            return (
               <UserCard
                key={user.id}
                user={user}
                onDeleteUser={onDeleteUser}
                onUpdateUser={onUpdateUser}
              />
            );
          })}
        </ul>
      );





}

export default UserList;
