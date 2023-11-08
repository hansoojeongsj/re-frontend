import styled from 'styled-components';
export const ContentContainer = styled.div`
  background-color: #FFEACC;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
`;
export const LogoImage = styled.img`
  width: 100px;
  height: auto;


`;
export const Title = styled.div`
  color: #20217d;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 50px;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (min-width: 0px) and (max-width: 374px) {
    font-size: 25px;
  }
  @media screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 40px;
  }
`;

export const InputBox = styled.div`
  font-family: 'Pretendard', sans-serif;
  background-color: #FFF1DC;
  color: white;
  font-size: 19px;
  font-weight: bold;
  width: 1100px;
  height: 300px;
  resize: none;
  border-radius: 45px;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
  margin-bottom: 30px;
  padding: 40px;

`;

export const IDInput = styled.input`
  font-family: 'Pretendard', sans-serif;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 19px;
  resize: none; /* 사용자 크기 조정 비활성화 */
  outline: none; /* 포커스 효과 제거 */

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ffffff;
  }
  @media screen and (max-width: 412px) {
    font-size: 15px; /* 작은 화면에서 폰트 크기 조절 */
  }
`;
export const PWInput = styled.textarea`
  font-family: 'Pretendard', sans-serif;
  width: 100%;
  height: 87%;
  background-color: transparent;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 19px;
  resize: none; /* 사용자 크기 조정 비활성화 */
  outline: none; /* 포커스 효과 제거 */
  &::placeholder {
    color: #ffffff;
  }
  @media screen and (max-width: 412px) {
    font-size: 15px; /* 작은 화면에서 폰트 크기 조절 */
  }
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 두께 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #595959;
    border-radius: 5px;
    backdrop-filter: blur(50px);
  }

  &::-webkit-scrollbar-track {
    background-color: #acacac; /* 스크롤바 트랙 색상 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
  }
`;

export const Button = styled.button`
  width: 380px;
  height: 75px;
  background-color: #FFAC33;
  color: black;
  font-size: 35px;
  display: block;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  @media screen and (max-width: 475px) {
    width: 100%; /* 모바일 화면에서 가로 가득 차도록 설정합니다. */
    margin: 0; /* 좌우 마진을 제거합니다. */
  }
  &:hover {
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25) inset;
  }
`;