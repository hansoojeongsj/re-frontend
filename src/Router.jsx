import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Main from './page/Main';
import Detail from './page/Detail';
import Login from './page/Login';
import MyPage from './page/MyPage';
import Paying from './page/Paying';
import Signin from './page/Signin';
// import Nav from './components/common/Nav/Nav';
// import Footer from './components/common/Footer/Footer';

function AppNavigation() {

  // 다른 페이지에서는 네비게이션 표시
  return (
    <>
      {/* <Nav /> */}
      <GlobalWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />  
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/paying" element={<Paying />} />
          <Route path="/detail/:post_id" element={<Detail />} />
        </Routes>
      </GlobalWrapper>
      {/* <Footer /> */}
    </>
  );
}

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  @media screen and (min-width: 834px) {
    padding: 8rem;
  }
  @media screen and (max-width: 833px) {
    padding: 5rem;
  }
  @media screen and (max-width: 400px) {
    padding: 3rem;
  }
`;
