import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [currentTab, setCurrentTab] = useState(0);
  const path = useLocation().pathname;

  const tabs = [
    {
      id: 1,
      title: '로그인',
    },
    {
      id: 2,
      title: '회원가입',
    },
  ];

  useEffect(() => {
    if (path === '/') {
      setCurrentTab(0);
    } else if (path === '/login') {
      setCurrentTab(tabs[0].id);
    } else if (path === '/register') {
      setCurrentTab(tabs[1].id);
    }
  });

  const onClickTab = (id: number) => {
    setCurrentTab(id);
    switch (id) {
      case 1:
        navigate('/login');
        break;
      case 2:
        navigate('/register');
        break;
    }
  };

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
        <Header
          onClickLogo={() => navigate('/')}
          tabs={tabs}
          onClickTab={onClickTab}
          currentTab={currentTab}
        />
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
