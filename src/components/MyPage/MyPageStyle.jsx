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
export const NavTag = styled.button`
  width: 75px;
  height: 65px;
  border-radius: 20px;
  background: #D9D9D9;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #FFAC33;
  text-align: center;
  font-size: 30px; 
  background: #D9D9D9; 

  &:hover {
    color: #FFAC33;
    background:#FFEACC; /* 호버 시 그라데이션 변경 */
  }
  @media screen and (max-width: 650px) {
    width: 30px; /* 창의 너비가 500px 미만이면 40px로 설정 */
    font-size: 20px; 
    margin-right: 15px;

  }

  @media screen and (min-width: 650px) and (max-width: 800px) {
    width: 40px; /* 창의 너비가 500px 이상 700px 미만이면 60px로 설정 */
  }
`;

export const NavTagContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  justify-content: flex-end; 
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
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬을 위한 설정 */
  margin-bottom: 15px;
`;

export const MypageButton = styled.button`
  width: 90px;
  height: 90px;
  margin: 15px;
  border: 2px solid ${props => (props.selected ? "#FFF1DC" : "#FFAC33")};
  background-color: ${props => (props.selected ? "#FFAC33" : "#FFF1DC")};
  color: black;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #FFAC33;
    border-color: #FFF1DC;
  }
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
    font-size: 13px;
    margin: 10px;

  }
`;
export const MypageRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 필요에 따라 조정 */
`;

export const MypageContent = styled.label`
  color: #FFAC33;
  font-size: 20px;
  font-weight: bold;
  width: 300px; /* 예시로 설정한 고정된 너비 */
  margin-right: 20px; /* 간격 조절 */
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

export const ModifyButton=styled.button`
  width: 100%;
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
  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 100px;
    height: 50px;
    font-size: 20px;
  }
`;

export const ReviewContainer = styled.div`
  width: 100%;

`;

export const ReviewList = styled.div`
  width: 80%;
  max-width: 800px;
  height: 90px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 20px auto; /* 수평 중앙 정렬을 위한 축약형 사용 */
  @media screen and (max-width:600px) {
    width: 100%;

  }
`;
export const Pagination = styled.div`
  margin-top: 20px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap; 

    li {
      margin: 0 3px;
      cursor: pointer;
      font-size: 18px;
      color: #FFAC33;
      border-radius: 10px;
      padding: 5px 10px;
      transition: background-color 0.3s, color 0.3s;


      &:hover {
        background-color: #FFAC33;
        color: white;
        border: 1px solid #FFAC33;
        box-shadow: 0 0 5px rgba(255, 188, 87, 0.7);
      }

      &.active {
        background-color: #FFAC33;
        color: white;
        border: 1px solid #FFAC33;
        box-shadow: 0 0 5px rgba(255, 188, 87, 0.7);
      }
    }
    
  }
  @media (max-width: 600px) {
    ul li {
      font-size: 14px; /* 원하는 작은 폰트 크기로 조절하세요. */
    }
  }
`;

export const LoginMessage = styled.div`
  color: #FFAC33;
  font-size: 20px;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
