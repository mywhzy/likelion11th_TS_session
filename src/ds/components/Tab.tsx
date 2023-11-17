import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TabProps {
  isActive?: boolean;
}

export const Tab = ({
  isActive = false,
  children,
}: PropsWithChildren<TabProps>) => {
  return <Button $isActive={isActive}>{children}</Button>;
};

const Button = styled.button<{ $isActive: boolean }>`
  ${({ theme }) => theme.typography.title1};
  padding: ${({ $isActive }) => ($isActive ? '22px 0 18px 0' : '22px 0')};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.green : theme.color.gray1};
  border-bottom: ${({ theme, $isActive }) =>
    $isActive && `4px solid ${theme.color.green}`};

  &:hover {
    padding: 22px 0 18px 0;
    color: ${({ theme }) => theme.color.green};
    border-bottom: 4px solid ${({ theme }) => theme.color.green};
  }
`;
