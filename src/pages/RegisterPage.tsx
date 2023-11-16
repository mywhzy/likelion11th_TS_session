import { useFormik } from 'formik';

export const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // api 연결 전 테스팅용 콘솔 출력
      console.log(values);
    },
  });

  return (
    <>
      <p>회원가입</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          onChange={formik.handleChange}
          value={formik.values.userName}
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
