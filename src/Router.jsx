import {  Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Detail from './page/Detail';
import Login from './page/Login';
import MyPage from './page/MyPage';
import Paying from './page/Paying';
import Signin from './page/Signin';
//import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';
//import List from './components/Main/List';


function AppNavigation() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />  
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/paying" element={<Paying />} />
          <Route path="/detail/:post_id" element={<Detail />} />
        </Routes>
        <Footer />
    </>
  );
}


export default function Router() {
  return (
      <AppNavigation />
  );
}

