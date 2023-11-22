
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  height: 60%;
`;

export const CloseButton = styled.button`
  display: flex;
  font-size: 20px;
  padding:10px;
  color:  #FFAC33;
  cursor: pointer;
  align-self: flex-start;
  transition: transform 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

  &:hover {
    transform: scale(1.2); /* 호버 시에 크기를 1.2배로 확대 */
  }

`;
export const OkButton = styled.button`
  background-color: #FFAC33;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  width: 40%;
  height: 60px;
  font-size: 30px;
  border-radius: 50px;
  font-weight: bold;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

  &:hover {
    background-color: white;
    border: 2px solid #FFAC33;
    color: #FFAC33;
    box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25); /* 그림자 효과 */
  }
  @media screen and (max-width: 600px){
    width: 50%;
    height: 60px;
    font-size: 25px;

  }
`;
