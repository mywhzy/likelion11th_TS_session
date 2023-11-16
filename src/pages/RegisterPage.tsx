import { useFormik } from 'formik';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from '../utils/sendRequest';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('api/auth/register', sendRequest, {
    onSuccess: () => {
      alert('회원가입 성공!');
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
    <>
      <p>회원가입</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          onChange={formik.handleChange}
          value={formik.values.username}
          required
        />
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
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};
