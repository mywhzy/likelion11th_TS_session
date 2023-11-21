import styled from 'styled-components';

interface UserListProps {
  subtitle: string;
  title: string;
}

export const Card = ({ subtitle, title }: UserListProps) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 14px 16px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 #e5e8f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const Subtitle = styled.h3`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.color.gray2};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1}
  color: ${({ theme }) => theme.color.gray1};
`;
