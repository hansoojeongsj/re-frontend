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
  height: 500px;
  resize: none;
  border-radius: 45px;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 50px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25), 5px 0px 5px -3px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    height: 550px;
  }
`;

export const SubConainer = styled.div`

  display: flex;
  flex-direction: column;
  `;


export const SigninContent = styled.a`
  color:  #FFAC33;
  font-size: 20px;
  font-weight: bold;
  flex: 0.4;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    
  }

`;

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #FFC672;
  border-radius: 20px;
  background-color: white;
  padding: 20px; 
  font-size: 20px; 
  margin: 15px; 
  color: #FFAC33;
  max-width: 500px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
`;


export const SigninButton = styled.button`
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
    max-width: 300px;
    height: 60px;
    font-size: 25px;
  }
`;

export const LoginButton = styled.button`
  width: 90%;
  max-width: 380px;
  height: 60px;
  font-size: 30px;
  color: #FFAC33;
  display: block;
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
  @media screen and (max-width: 600px) {
    height: 50px;
    font-size: 25px;
  }

`;