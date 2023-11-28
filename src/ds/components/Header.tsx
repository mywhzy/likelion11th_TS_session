import styled from 'styled-components';
import { TabBar } from './TabBar';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import { TabItem } from '../../types';
import { UsernameBox } from '../../components/UsernameBox';

interface HeaderProps {
  tabs: TabItem[];
  username: string | null;
  currentTab: number;
  onClickLogo: () => void;
  onClickTab: (id: number) => void;
}

export const Header = ({
  username,
  tabs,
  currentTab,
  onClickLogo,
  onClickTab,
}: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <SideContainer>
          {username && <UsernameBox username={username} />}
          <TabBar tabs={tabs} onClickTab={onClickTab} currentTab={currentTab} />
        </SideContainer>
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

const SideContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
