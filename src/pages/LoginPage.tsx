import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { sendRequest } from '../utils/sendRequest';
import { Button } from '../ds/components/Button';
import { Input } from '../ds/components/Input';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('api/auth/login', sendRequest, {
    onSuccess: (data) => {
      alert(data.data);
      navigate('/');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await trigger(values);
      resetForm();
    },
  });

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          title="이메일"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          errorMessage={formik.errors.email}
        />
        <Input
          title="비밀번호"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          errorMessage={formik.errors.password}
        />
        <Button type="submit" marginTop="44px">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1}
  color: ${({ theme }) => theme.color.gray1};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  max-width: 500px;
`;
