import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/globalStyle';
import Router from './Router';
import { AuthProvider } from './components/Login/AuthContext'; // AuthProvider 추가

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          {/* AuthProvider로 감싼 부분 */}
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
