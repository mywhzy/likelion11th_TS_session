import styled from 'styled-components';
import { Tab } from './Tab';
import { TABS } from '../../constants';

export const TabBar = () => {
  return (
    <Container>
      <Tab>{TABS[0]}</Tab>
      <Tab>{TABS[1]}</Tab>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
