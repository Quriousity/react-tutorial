function UserList() {
  const users = [
    {
      id: 1,
      username: 'bizzy',
      email: 'bizzy@gmail.com'
    },
    {
      id: 2,
      username: 'admin',
      email: 'admin@example.com'
    },
    {
      id: 3,
      username: 'tester',
      email: 'tester@example.com'
    }
  ];
  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>
  );
}

export default UserList;