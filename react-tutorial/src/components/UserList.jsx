function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        // user 객체에 참조할 만한 index가 있을 때
        <User user={user} key={user.id} onRemove={onRemove}/>
        // user 객체에 참조할 만한 index가 없을 때
        // <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;