import styled from 'styled-components';

export interface InputProps {
  title: string;
  type?: string;
  name?: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  errorMessage?: string;
}

export const Input = ({
  title,
  type = 'text',
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  errorMessage,
}: InputProps) => {
  return (
    <Container>
      <Body>{title}</Body>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        $isError={!!errorMessage}
      />
      {!!errorMessage && <HelperText>{errorMessage}</HelperText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Body = styled.h3`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray1};
`;

const StyledInput = styled.input<{ $isError: boolean }>`
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isError, theme }) => ($isError ? theme.color.red : theme.color.gray3)};
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1};

  &:hover {
    border: 1px solid
      ${({ $isError, theme }) =>
        $isError ? theme.color.red : theme.color.gray2};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.color.gray1};
  }

  &:active {
    border: 1px solid
      ${({ $isError, theme }) =>
        $isError ? theme.color.red : theme.color.gray1};
  }

  &:focus {
    border: 1px solid
      ${({ $isError, theme }) =>
        $isError ? theme.color.red : theme.color.gray1};
  }
`;

const HelperText = styled.h3`
  color: ${({ theme }) => theme.color.red};
  ${({ theme }) => theme.typography.body1};
`;
