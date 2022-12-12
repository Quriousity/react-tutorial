function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }} 
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        // user 객체에 참조할 만한 index가 있을 때
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // user 객체에 참조할 만한 index가 없을 때
        // <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;