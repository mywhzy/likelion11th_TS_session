import useSWR from 'swr';
import { User } from '../types';

export const UserListPage = () => {
  const { data } = useSWR('api/users');

  const users: User[] = data?.data.users;

  return (
    <>
      <h3>가입 유저 목록</h3>
      {users &&
        users.map((user) => (
          <div key={user.email}>
            <b>username: </b> {user.username} <b>email: </b> {user.email}
          </div>
        ))}
    </>
  );
};
