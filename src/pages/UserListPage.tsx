import useSWR from 'swr';
import styled from 'styled-components';
import { User } from '../types';
import { Card } from '../ds/components/Card';
import { ReactComponent as HomeLogo } from '../ds/icons/BigLion.svg';

export const UserListPage = () => {
  const { data, error } = useSWR('api/users');

  const users: User[] = data?.data.users;

  return (
    <Container>
      <HomeLogo />
      {(!data || error) && <b>Loading...</b>}
      <ListContainer>
        {users &&
          users.map((user) => (
            <Card
              key={user.email}
              title={user.username}
              subtitle={user.email}
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
  margin-bottom: 10px;
`;
