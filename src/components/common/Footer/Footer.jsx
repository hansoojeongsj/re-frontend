import * as F from './FooterStyle';

const prof = ['학식 9조대'];

const developers = [
  '김희윤',
  '박서진',
  '박소이',
  '한수정'
]

const Footer = () => {
  return (
    <F.FooterWrapper>
      <F.FooterTitle>2023 덕성여자대학교 컴퓨터공학 전공 제33회 졸업전시회 WISCOM</F.FooterTitle>
      <F.Box>
        <F.Category>지도교수</F.Category>
        <F.Names>
          {prof.map((developer, index) => (
            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
          ))}
        </F.Names>
      </F.Box>
      <F.Box>
        <F.Category>개발자</F.Category>
        <F.Names>
          {developers.map((developer, index) => (
            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
          ))}
        </F.Names>
      </F.Box>
      <F.Box>
        <F.Category>졸업전시 준비위원회</F.Category>
        <F.Names>DD</F.Names>
      </F.Box>
      <F.InfoContainer>
        <F.Info>서울 도봉구 삼양로144길 33 덕성여자대학교 과학기술대학 컴퓨터공학전공 </F.Info>
        <F.Info>TEL 02-901-8341</F.Info>
        <F.Info> Copyright (c) Computer Language and Literature. All right reserved.</F.Info>
      </F.InfoContainer>
    </F.FooterWrapper>
  );
};

export default Footer;
