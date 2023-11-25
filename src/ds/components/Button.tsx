import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types';

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  marginTop?: number;
}

export const Button = ({
  onClick,
  type = 'button',
  children,
  marginTop = 0,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton onClick={onClick} type={type} $marginTop={marginTop}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $marginTop: number }>`
  padding: 14px 16px;
  border-radius: 12px;
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.typography.title1};
  margin-top: ${({ $marginTop }) => $marginTop && `${$marginTop}px`};

  &:hover {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
  }

  &:active {
    background: linear-gradient(93deg, #b1de00 -3.88%, #1de08e 103.41%);
  }
`;
