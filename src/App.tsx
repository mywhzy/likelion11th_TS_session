import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './constants';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserListPage } from './pages/UserListPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalFonts } from './styles/GlobalFonts';
import { Header } from './ds/components/Header';

function App() {
  const navigate = useNavigate();

  const tabs = [
    {
      id: 0,
      title: '로그인',
    },
    {
      id: 1,
      title: '회원가입',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(BASE_URL + url).then((res) => res.json()),
        }}
      >
        <Header onClick={() => navigate('/')} tabs={tabs} />
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
