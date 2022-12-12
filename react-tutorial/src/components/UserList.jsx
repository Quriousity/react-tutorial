function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

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
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;