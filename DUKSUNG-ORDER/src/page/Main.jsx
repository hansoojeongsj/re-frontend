import { useParams } from 'react-router-dom';
import List from './../components/Main/List'
export default function Main() {
  const { userid } = useParams(); // useParams로 userid를 받아옴
  console.log('MyPage 컴포넌트가', userid ? `userid: ${userid}` : 'userid가 없음');

  return (
    <>
      
      <List userid={userid}/>
    </>
  );
}