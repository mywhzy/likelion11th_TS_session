import { useFormik } from 'formik';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { sendRequest } from '../utils/sendRequest';
import { Input } from '../ds/components/Input';
import { Button } from '../ds/components/Button';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('api/auth/register', sendRequest, {
    onSuccess: (data) => {
      alert(data.data.message);
      navigate('/login');
    },
  });

  const formik = useFormik({
    initialValues: {
      username: '',
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
      <Title>회원가입</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          title="이름"
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Input
          title="이메일"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          title="비밀번호"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" marginTop="44px">
          회원가입
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
