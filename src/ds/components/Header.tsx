import styled from 'styled-components';
import { TabBar } from './TabBar';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import { TabItem } from '../../types';

interface HeaderProps {
  tabs: TabItem[];
  currentTab: number;
  onClickLogo: () => void;
  onClickTab: (id: number) => void;
}

export const Header = ({
  tabs,
  currentTab,
  onClickLogo,
  onClickTab,
}: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} onClickTab={onClickTab} currentTab={currentTab} />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  position: sticky;
  background-color: #fff;
  top: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
