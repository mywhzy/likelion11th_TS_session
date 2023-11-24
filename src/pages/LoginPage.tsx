import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { sendRequest } from '../utils/sendRequest';
import { Button } from '../ds/components/Button';
import { Input } from '../ds/components/Input';
import * as Yup from 'yup';
import { INPUT_ERROR_MESSAGE, EMAIL_REGEX } from '../constants';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [onClickLoginBtn, setOnClickLoginBtn] = useState(false);
  const [submitErrors, setSubmitErrors] = useState({
    email: '',
    password: '',
  });
  const [notRegisteredEmail, setNotRegisteredEmail] = useState('');
  const [wrongPassword, setWrongPassword] = useState('');

  const { trigger } = useSWRMutation('api/auth/login', sendRequest, {
    onSuccess: (data) => {
      alert(data.data.message);
      navigate('/');
    },
    onError: (error) => {
      if (error.message === INPUT_ERROR_MESSAGE.notRegisteredEmail) {
        setNotRegisteredEmail(formik.values.email);
        formik.setErrors({
          ...formik.errors,
          email: INPUT_ERROR_MESSAGE.notRegisteredEmail,
        });
      } else if (error.message === INPUT_ERROR_MESSAGE.wrongPassword) {
        setWrongPassword(formik.values.password);
        formik.setErrors({
          ...formik.errors,
          password: INPUT_ERROR_MESSAGE.wrongPassword,
        });
      }
    },
  });

  const validationSchema = Yup.object({
    email: Yup.string().required(INPUT_ERROR_MESSAGE.requiredEmail),
    password: Yup.string().required(INPUT_ERROR_MESSAGE.requiredPassword),
  });

  const formik = useFormik({
    initialValues: {
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

  const validateEmailFormat = () => {
    if (formik.values.email && !EMAIL_REGEX.test(formik.values.email)) {
      formik.setErrors({
        ...formik.errors,
        email: INPUT_ERROR_MESSAGE.formatEmail,
      });
    }
  };

  const onFocus = (inputName: 'email' | 'password') => {
    switch (inputName) {
      case 'email':
        if (formik.errors.email && onClickLoginBtn) {
          setSubmitErrors({
            ...submitErrors,
            email: formik.errors.email,
          });
        }
        formik.setErrors({
          ...formik.errors,
          email: '',
        });
        break;
      case 'password':
        if (formik.errors.password && onClickLoginBtn) {
          setSubmitErrors({
            ...submitErrors,
            password: formik.errors.password,
          });
        }
        formik.setErrors({
          ...formik.errors,
          password: '',
        });
        break;
    }
    return formik.handleBlur;
  };

  const onBlur = (inputName: 'email' | 'password') => {
    switch (inputName) {
      case 'email':
        if (!formik.values.email && submitErrors.email) {
          formik.setErrors({
            ...formik.errors,
            email: INPUT_ERROR_MESSAGE.requiredEmail,
          });
        }
        validateEmailFormat();
        checkNotRegisteredEmail();
        break;
      case 'password':
        if (!formik.values.password && submitErrors.password) {
          formik.setErrors({
            ...formik.errors,
            password: INPUT_ERROR_MESSAGE.requiredPassword,
          });
        }
        checkWrongPassword();
        break;
    }

    return formik.handleBlur;
  };

  const checkNotRegisteredEmail = () => {
    if (notRegisteredEmail && formik.values.email === notRegisteredEmail) {
      formik.setErrors({
        ...formik.errors,
        email: INPUT_ERROR_MESSAGE.notRegisteredEmail,
      });
    }
  };

  const checkWrongPassword = () => {
    if (wrongPassword && formik.values.password === wrongPassword) {
      formik.setErrors({
        ...formik.errors,
        password: INPUT_ERROR_MESSAGE.wrongPassword,
      });
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={formik.handleSubmit}>
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
          onChange={formik.handleChange}
          onFocus={() => onFocus('password')}
          onBlur={() => onBlur('password')}
          value={formik.values.password}
          errorMessage={formik.errors.password}
        />
        <Button
          type="submit"
          marginTop="44px"
          onClick={() => setOnClickLoginBtn(true)}
        >
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
