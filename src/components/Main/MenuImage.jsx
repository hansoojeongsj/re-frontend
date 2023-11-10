import styled from 'styled-components';
import babybamsik from './../../menu-image/babybamsik.jpg';
import bamsikimage from './../../menu-image/bamsik-image.jpg';
import hwasaimage from './../../menu-image/hwasa-image.jpg';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬을 위해 추가 */
  margin: 0 auto;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const MenuTitle = styled.a`
  margin-left: 25px;
  padding: 5px;
  font-size: 30px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

`;

const Image = styled.img`
  width: 90%;
  height: auto;
  padding: 5px;

`;

const MenuImage = () => {
  return (
    <GalleryContainer>
      <TitleWrapper>
        <MenuTitle>학생식당</MenuTitle>
      </TitleWrapper>
      <ImageContainer>
        <div>
          <Image src={babybamsik} alt="메뉴 1" />
          <h1>파스타</h1>
        </div>
        <div>
          <Image src={bamsikimage} alt="메뉴 2" />
          <h1>햄버거</h1>
        </div>
        <div>
          <Image src={hwasaimage} alt="메뉴 3" />
          <h1>마라탕</h1>
        </div>
      </ImageContainer>
    </GalleryContainer>
  );
};

export default MenuImage;
