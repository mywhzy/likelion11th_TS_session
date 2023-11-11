import useSWR from 'swr';
import { BASE_URL } from '../constants';
import { User } from '../types';

// TODO: fetcher 전역으로 빼기
const fetcher = (url: string) =>
  fetch(BASE_URL + url).then((res) => res.json());

export const UserListPage = () => {
  const { data, error } = useSWR('/api/users', fetcher);
  const users: User[] = data?.data.users;

  return (
    <>
      <p>가입 유저 목록</p>
      {users &&
        users.map((user) => (
          <div key={user.email}>
            username: {user.username} &nbsp; email: {user.email}
          </div>
        ))}
    </>
  );
};
