import styled from 'styled-components';
export const ContentContainer = styled.div`
`;
export const BackButton = styled.button`
  display: flex;
  justify-content: left;
  font-size: 18px;
  padding:10px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
  `;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;
export const Title = styled.div`
  color: #FFAC33;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 70px;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 25px;
  padding: 20px;
  @media screen and (min-width: 0px) and (max-width: 374px) {
    font-size: 40px;
  }
  @media screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 50px;
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 60px;
  }
`;

export const IvoryBox = styled.div`
  font-family: 'Pretendard', sans-serif;
  background-color: #f9f1e4;
  width: 1300px;
  max-height: 480px;
  resize: none;
  border-radius: 45px;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
  margin-bottom: 30px;
  padding: 50px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25), 5px 0px 5px -3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center;
`;


export const LoginRow = styled.div`
  display: flex;
  align-items: column;
  margin-bottom: 20px; /* 필요에 따라 조정 */
`;

export const ErrorMessage = styled.div`
  color: #FFAC33;
  font-size: 14px;
  margin-top: 5px;
`;

export const LoginContent = styled.label`
  color: #FFAC33;
  font-size: 20px;
  font-weight: bold;
  width: 160px; /* 예시로 설정한 고정된 너비 */
  margin-right: 15px; /* 간격 조절 */
  @media screen and (max-width: 600px) {
    width: 160px;
    font-size: 15px;
    margin-right: 1px; /* 간격 조절 */
  }
`;

export const InputBox = styled.input`
  width: 80%;
  height: 40px;
  border: 2px solid #FFC672;
  border-radius: 20px;
  background-color: white;
  padding: 0 20px; /* padding 수정 */
  font-size: 20px;
  color: #FFAC33;
  max-width: 600px; /* 최대 너비 설정 */
`;



export const LoginButton = styled.button`
  width: 90%;
  max-width: 380px;
  height: 75px;
  background-color: #FFAC33;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  margin-top: 15px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

&:hover {
  background-color: white;
  border: 2px solid #FFAC33;
  color: #FFAC33;
  box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25); /* 그림자 효과 */
}

  @media screen and (max-width: 768px) {
    height: 60px;
    font-size: 22px;
  }
`;

export const SigninButton = styled.button`
  width: 90%;
  max-width: 380px;
  height: 60px;
  font-size: 30px;
  color: #FFAC33;
  border-radius: 50px;
  font-weight: bold;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  background-color: white;
  border: 2px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

&:hover {
  background-color: #FFAC33;
  color: white;
  box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25); /* 그림자 효과 */
}

  @media screen and (max-width: 600px) {
    height: 50px;
    font-size: 22px;
  }

`;

