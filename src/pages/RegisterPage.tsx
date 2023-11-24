import { useState } from 'react';
import { useFormik } from 'formik';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import { sendRequest } from '../utils/sendRequest';
import { Input } from '../ds/components/Input';
import { Button } from '../ds/components/Button';
import { INPUT_ERROR_MESSAGE, EMAIL_REGEX } from '../constants';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [duplicateEmail, setDuplicateEmail] = useState('');

  const { trigger } = useSWRMutation('api/auth/register', sendRequest, {
    onSuccess: (data) => {
      alert(data.data.message);
      navigate('/login');
    },
    onError: (error) => {
      if (error.message === INPUT_ERROR_MESSAGE.duplicateEmail) {
        setDuplicateEmail(formik.values.email);
        formik.setErrors({
          ...formik.errors,
          email: INPUT_ERROR_MESSAGE.duplicateEmail,
        });
      }
    },
  });

  const validationSchema = Yup.object({
    username: Yup.string().required(INPUT_ERROR_MESSAGE.requiredUsername),
    email: Yup.string().required(INPUT_ERROR_MESSAGE.requiredEmail),
    password: Yup.string().required(INPUT_ERROR_MESSAGE.requiredPassword),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      await trigger(values);
      resetForm();
    },
  });

  const onFocus = (inputName: 'username' | 'email' | 'password') => {
    switch (inputName) {
      case 'username':
        formik.setErrors({
          ...formik.errors,
          username: '',
        });
        break;
      case 'email':
        formik.setErrors({
          ...formik.errors,
          email: '',
        });
        break;
      case 'password':
        formik.setErrors({
          ...formik.errors,
          password: '',
        });
        break;
    }
    return formik.handleBlur;
  };

  const validateEmailFormat = () => {
    if (formik.values.email && !EMAIL_REGEX.test(formik.values.email)) {
      formik.setErrors({
        ...formik.errors,
        email: INPUT_ERROR_MESSAGE.formatEmail,
      });
    }
  };

  const checkDuplicateEmail = () => {
    if (duplicateEmail) {
      if (formik.values.email === duplicateEmail) {
        formik.setErrors({
          ...formik.errors,
          email: INPUT_ERROR_MESSAGE.duplicateEmail,
        });
      }
    }
  };

  const onBlur = (inputName: 'username' | 'email' | 'password') => {
    switch (inputName) {
      case 'username':
        if (!formik.values.username) {
          formik.setErrors({
            ...formik.errors,
            username: INPUT_ERROR_MESSAGE.requiredUsername,
          });
        }
        break;
      case 'email':
        if (!formik.values.email) {
          formik.setErrors({
            ...formik.errors,
            email: INPUT_ERROR_MESSAGE.requiredEmail,
          });
        }
        validateEmailFormat();
        checkDuplicateEmail();
        break;
      case 'password':
        if (!formik.values.password) {
          formik.setErrors({
            ...formik.errors,
            password: INPUT_ERROR_MESSAGE.requiredPassword,
          });
        }
        break;
    }

    return formik.handleBlur;
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          title="이름"
          type="text"
          name="username"
          onFocus={() => onFocus('username')}
          onChange={formik.handleChange}
          onBlur={() => onBlur('username')}
          value={formik.values.username}
          errorMessage={formik.errors.username}
        />
        <Input
          title="이메일"
          name="email"
          onChange={formik.handleChange}
          onFocus={() => onFocus('email')}
          onBlur={() => onBlur('email')}
          value={formik.values.email}
          errorMessage={formik.errors.email}
        />
        <Input
          title="비밀번호"
          type="password"
          name="password"
          onFocus={() => onFocus('password')}
          onBlur={() => onBlur('password')}
          onChange={formik.handleChange}
          value={formik.values.password}
          errorMessage={formik.errors.password}
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
