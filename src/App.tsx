import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { BASE_URL } from './constants';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserListPage } from './pages/UserListPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/theme';
import { GlobalStyles } from './style/GlobalStyles';
import { GlobalFonts } from './style/GlobalFonts';
import { Header } from './ds/components/Header';

function App() {
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
        <Header />
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
