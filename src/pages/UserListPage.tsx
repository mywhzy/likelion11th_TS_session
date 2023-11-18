import useSWR from 'swr';
import styled from 'styled-components';
import { User } from '../types';
import { UserList } from '../ds/components/UserList';
import { ReactComponent as HomeLogo } from '../ds/icons/BigLion.svg';

export const UserListPage = () => {
  const { data } = useSWR('api/users');

  const users: User[] = data?.data.users;

  return (
    <Container>
      <HomeLogo />
      <ListContainer>
        {users &&
          users.map((user) => (
            <UserList
              key={user.email}
              username={user.username}
              email={user.email}
            />
          ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 60px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 1200px;
  width: 100%;
`;
