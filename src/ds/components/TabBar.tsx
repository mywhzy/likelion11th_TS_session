import styled from 'styled-components';
import { Tab } from './Tab';
import { Tabs } from '../../types';

interface TabBarProps {
  tabs: Tabs[];
}

export const TabBar = ({ tabs }: TabBarProps) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id}>{tab.title}</Tab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
