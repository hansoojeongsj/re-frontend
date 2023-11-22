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
  height: auto;
  resize: none;
  border-radius: 45px;
  max-width: 100%;
  margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
  margin-bottom: 30px;
  padding: 50px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25), 5px 0px 5px -3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center;
  @media screen and (max-width: 900px) {
    padding: 30px;
  }
`;
export const PayingContainer=styled.div`
  width: 100%;
  align-items: center;
`;
export const PayingContent = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  justify-content: center;
  border-radius: 30px;
  margin: 10px 0; 
  font-size: 15px;
  align-items: center; /* Center items vertically */
  padding:10%;
  font-size: 18px;
  justify-content: space-between; /* Use space-between to push items to the sides */
  display: flex; /* Add display: flex to enable flex properties */

  @media screen and (max-width: 1200px) {
    font-size: 16px;

  }

  @media screen and (max-width: 900px) {
    flex-direction: column; /* 화면이 좁아질 때 세로로 정렬 */
    align-items: flex-start; /* 세로 정렬시 왼쪽 정렬 */
    padding:10%;
    font-size: 13px;

  }

`;

export const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line if the width is reduced */
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px; /* Add a margin between LeftContainer and RightContainer */
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px; /* Add a margin between LeftContainer and RightContainer */
`;

export const NumberButton = styled.button`
  border-radius: 20px;
  background-color: #FFAC33;
  color: white;
  width: 70px;
  min-width: 70px; /* Set a min-width to prevent it from becoming too small */

  height: 35px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  font-weight: bold;
  &:hover {
    background-color: white;
    border: 2px solid #FFAC33;
    color: #FFAC33;
    box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25);
  }

  @media screen and (max-width: 900px) {
    width: 60px;
    min-width: 60px; /* Set a min-width to prevent it from becoming too small */
    margin-top:10px;

    height: 25px;
  }
`;

export const NumberInput = styled.input`
  width: 120px;
  margin-right: 10px; /* Adjust the margin as needed */
  @media screen and (max-width: 370px) {
    font-size: 10px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }

`;
export const NumberTitle= styled.a`
  white-space: nowrap; /* 변경된 부분 */
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    margin-bottom:0px;
  }
  
`;
export const PayingButton = styled.button`
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
  margin-top:25px;
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
export const RadioWrapper = styled.div`
  margin-top: 10px;
  
  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      margin-right: 5px;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #FFAC33;
      outline: none;

      &:checked {
        background-color: #FFAC33;
      }
    }
  }
`;

export const PayingDetail=styled.div`
  min-height: 250px; 
  height: auto; 
  background-color: white;
  border: 1.5px solid #FFAC33;
  border-radius: 30px;
  margin: 10px 0;
  font-size: 15px;
  padding: 10%;
  font-size: 18px;
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 1200px) {
    font-size: 16px;

  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10%;
    font-size: 13px;
  }
`;