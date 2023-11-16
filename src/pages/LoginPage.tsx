import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { useFormik } from 'formik';
import { sendRequest } from '../utils/sendRequest';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('api/auth/login', sendRequest, {
    onSuccess: () => {
      alert('로그인 성공!');
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
    <>
      <p>로그인</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
