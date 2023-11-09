// import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/globalStyle';
import Main from './page/Main';
// import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer'
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main></Main>
          <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
