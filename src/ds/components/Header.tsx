import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/images/Lion.svg';
import { TabBar } from './TabBar';

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClick} />
        <TabBar />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  height: 70px;
  background-color: #fff;
  position: sticky;
  top: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  max-width: 1200px;
  width: 100%;
  align-self: stretch;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
