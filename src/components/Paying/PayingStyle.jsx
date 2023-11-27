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
  padding: 60px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25), 5px 0px 5px -3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 30px;
  }
`;
export const PayingContainer = styled.div`
  width: 100%;
  align-items: center;
  
`;

export const PayingContent = styled.div`
  width: 100%;
  height: auto;
  min-height: 70px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  border-radius: 30px;
  margin-bottom: 20px;
  font-size: 15px;
  align-items: center;
  padding: 10%;
  font-size: 18px;
  justify-content: space-between;
  display: flex;
  min-width: 220px;

  @media screen and (max-width: 376px) {
    font-size: 9px;
    padding: 5%;
    justify-content: center; /* Center the containers when screen width is below 575px */

  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10%;
    font-size: 13px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

`;

export const TopContent = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border: 1.5px solid #FFAC33;
  border-radius: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  padding: 10px;
  justify-content: center;
  min-width: 220px;
  
  @media screen and (max-width: 380px) {
    font-size: 9px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 2px;
    
  }
  @media screen and (max-width: 900px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
export const PayingList = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 1%;
  font-size: 18px;
  display: flex;

  @media screen and (max-width: 400px) {
    font-size: 9px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
export const PayingImg = styled.img`
  max-width: 100px;
  width: 100%;
  min-width: 10px;
  border-radius: 20%;
  
  @media screen and (max-width: 460px) {
    display: none;
}
`;

export const PayingMenu = styled.div`
  display: flex;
  width: 100%;
  padding: 10px; 
  font-size: 17px;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: center; /* Center the containers when screen width is below 575px */
    flex-wrap: wrap;
    padding: 2px; 
  }
  `;

export const MKTitle = styled.a`
  width: auto;
  margin-left: 5px;
  @media screen and (max-width: 450px) {
    font-size: 11px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

`;
export const Inner = styled.div`
  display: flex;
`;
export const Inner2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  height: 30px;
`;
export const PayingListTitle = styled.a`
  width: 100px;
  font-weight: bold;
  display: flex;
  margin-left: 5px;

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }

`;

export const PayingCount = styled.a`
  display: flex;
  align-items: center;
  min-width:20px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;
export const PayingPrice = styled.a`
  display: flex;
  align-items: center;
  min-width: 50px;
  margin-left: 10px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
  `;
export const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Center the containers and provide space around them */
  gap: 20px; /* Add a gap between containers for better separation */
  max-width: 100%;
  @media screen and (max-width: 575px) {
    justify-content: center; /* Center the containers when screen width is below 575px */
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: -20px;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;


export const NumberFont = styled.a`
  width: 200px;
  font-size: 15px ;
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
  align-self: flex-end; 
  &:hover {
    background-color: white;
    border: 2px solid #FFAC33;
    color: #FFAC33;
    box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25);
  }
  @media screen and (max-width: 400px) {
    width: 40px;
    margin-top:10px;

    height: 20px;
  }
  @media screen and (max-width: 900px) {
    width: 60px;
    min-width: 60px; /* Set a min-width to prevent it from becoming too small */
    margin-top:10px;

    height: 25px;
  }
`;

export const NumberTitle = styled.a`
  white-space: nowrap;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const NumberInput = styled.input`
  width: 140px;
  margin-right: 10px;
  font-size: 13px;

  @media screen and (max-width: 370px) {
    font-size: 10px;
  }

  @media screen and (max-width: 380px) {
    font-size: 12px;
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
  margin-top: 40px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: white;
    border: 2px solid #FFAC33;
    color: #FFAC33;
    box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25);
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
