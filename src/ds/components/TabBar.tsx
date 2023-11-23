import styled from 'styled-components';
import { Tab } from './Tab';
import { TabItem } from '../../types';

interface TabBarProps {
  tabs: TabItem[];
  currentTab: number;
  onClickTab: (id: number) => void;
}

export const TabBar = ({ tabs, currentTab, onClickTab }: TabBarProps) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          onClick={() => onClickTab(tab.id)}
          isActive={currentTab === tab.id ? true : false}
        >
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
