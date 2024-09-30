import { memo } from 'react';
import User from './User';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

// Comparación personalizada para memo
function areEqual(prevProps: UserListProps, nextProps: UserListProps) {
  // Solo volverá a renderizar si los usuarios realmente han cambiado
  return JSON.stringify(prevProps.users) === JSON.stringify(nextProps.users);
}

function UserList({ users }: UserListProps) {
  console.log('Rendering UserList');
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item">
          <User name={user.name} email={user.email} />
        </li>
      ))}
    </ul>
  );
}

export default memo(UserList, areEqual);
