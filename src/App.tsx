import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { BASE_URL } from './constants';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserListPage } from './pages/UserListPage';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(BASE_URL + url).then((res) => res.json()),
      }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/users" element={<UserListPage />} />
      </Routes>
    </SWRConfig>
  );
}

export default App;
