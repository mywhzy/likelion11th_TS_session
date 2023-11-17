import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/images/Lion.svg';
import { TabBar } from './TabBar';
import { Tabs } from '../../types';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tabs[];
}

export const Header = ({ onClickLogo, tabs }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} />
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
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
  align-self: stretch;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
