import { useState } from 'react';
import * as L from './LoginStyle';
import LogoImage from './logo.png';

export default function Login() {
  const [id, setName] = useState(''); 
  const [password, setInputText] = useState(''); 
  const maxLength = 15; 

  const handleNameChange = (event) => {
    const name = event.target.value;
    if (name.length <= 5) {
      setName(name);
    }
  };

  const handleInputChange = (e) => {
    const content = e.target.value;
    if (content.length > maxLength) {
      setInputText(content.slice(0, maxLength));
    } else {
      setInputText(content);
    }
  };
  return (
    <L.ContentContainer>
      <L.LogoContainer>

      <L.LogoImage
        src={LogoImage}
        alt="로고"
      />
      </L.LogoContainer>

      <L.Title>로그인 페이지</L.Title>
      <br />

      <L.InputBox>
        <L.IDInput
          type="text"
          placeholder="아이디 입력" 
          value={id}
          onChange={handleNameChange}
        />
        <L.PWInput
          placeholder="비밀번호 입력"
          value={password}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </L.InputBox>
      <br />

      <L.Button>
        완료
      </L.Button>

    </L.ContentContainer>
  );
}
