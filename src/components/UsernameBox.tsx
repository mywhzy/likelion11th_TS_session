import styled from 'styled-components';

interface UsernameBoxProps {
  username: string | null;
}

export const UsernameBox = ({ username }: UsernameBoxProps) => {
  return (
    <Container>
      <WelcomeText>안녕하세요</WelcomeText>
      <InnerContainer>
        <Username>{username}</Username>
        <WelcomeText>님!</WelcomeText>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeText = styled.h2`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;

const Username = styled.h2`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.green};
`;
