import { useState } from 'react';
import * as M from './MyPageStyle';
import { useAuth } from './../Login/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfileContent = () => {
  const { updateUser } = useAuth() || {};
  const [nickname, setNickname] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const handleModifyButtonClick = async () => {
    try {
      const authToken = localStorage.getItem('authToken');

      // Check if the required fields are filled
      if (!nickname || !phonenum || !currentPassword || !newPassword) {
        toast.error('모든 항목을 입력해주세요.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      // Check the current password
      const checkPasswordResponse = await fetch(`http://localhost:3000/app/mypage/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': authToken,
        },
        body: JSON.stringify({
          nickname,
          phonenum,
          currentpassword: currentPassword, 
          newpassword: newPassword,
        }),
      });
      const errorData = await checkPasswordResponse.json();
      console.log('Check Password Response:', errorData);
      
      if (errorData.code === 404) {
        toast.error('비밀번호가 잘못 입력되었습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }else if (errorData.code !== 200) {
        toast.error('일시적인 오류가 발생했습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
  
      // Update user information
      const updatePasswordResponse = await fetch('http://localhost:3000/app/mypage/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': authToken,
        },
        body: JSON.stringify({
          nickname,
          phonenum,
          currentpassword: currentPassword,
          newpassword: newPassword,
        }),
      });
      console.log(updatePasswordResponse);

      console.log('Update Password Response:', await updatePasswordResponse.json());
      if (updatePasswordResponse.ok) {
        // Client-side update
        updateUser({
          nickname,
          phonenum,
        });

        // Successful update notification
        toast.success('정보수정이 완료되었습니다!', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
        const updatedUserInfo = {
          nickname,
          phonenum,
        };
        console.log('정보 수정 완료', updatedUserInfo);

      } else {
        // Update failure handling
        toast.error('정보 수정을 실패했습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      // Unexpected error handling
      console.error('오류 발생:', error);
      toast.error('오류가 발생했습니다. ', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <M.MypageRow>
        <M.MypageContent>NICKNAME</M.MypageContent>
        <M.InputBox
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder={nickname}
        />
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>PHONE NUMBER</M.MypageContent>
        <M.InputBox
          value={phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
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
