import { useState } from 'react';
import * as M from './MyPageStyle'; // MyPageStyle 파일에 정의된 스타일을 가져옵니다.
import { useAuth } from './../Login/AuthContext';

const EditProfileContent = () => {
  const { userProfile, updateUser } = useAuth();
  const [nickname, setNickname] = useState(userProfile.nickname || '');
  const [phonenum, setPhonenum] = useState(userProfile.phonenum || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleModifyButtonClick = async () => {
    const yourAuthToken = localStorage.getItem('authToken');

    try {
      const response = await fetch('http://localhost:3000/app/mypage/:userId', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify({
          nickname,
          phonenum,
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        updateUser({
          ...userProfile,
          nickname: data.nickname,
          phonenum: data.phonenum,
        });
      }

      console.log(data);
    } catch (error) {
      console.error('Error during user information update:', error);
    }
  };

  return (
    <div>
      <M.MypageRow>
        <M.MypageContent>NICKNAME</M.MypageContent>
        <M.InputBox
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder={nickname ? `${nickname}` : 'Your saved nickname'}
        />
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>PHONE NUMBER</M.MypageContent>
        <M.InputBox
          value={phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
          placeholder={phonenum ? `${phonenum}` : 'Your saved phone number'}
        />
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>current PASSWORD</M.MypageContent>
        <M.InputBox type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>NEW PASSWORD</M.MypageContent>
        <M.InputBox type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </M.MypageRow>
      <M.ModifyButton onClick={() => handleModifyButtonClick()}>
        수정하기
      </M.ModifyButton>
    </div>
  );
};

export default EditProfileContent;
