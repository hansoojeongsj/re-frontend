import * as F from './FooterStyle';

const developers = [
  '학식 9조대 : ',
  '김희윤',
  '박서진',
  '박소이',
  '한수정'
]

const Footer = () => {
  return (
    <F.FooterWrapper>
      <F.Box>
        <F.Names>
          {developers.map((developer, index) => (
            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
          ))}
        </F.Names>
      </F.Box>
      <F.InfoContainer>
        <F.Info> Copyright (c) Computer Language and Literature. All right reserved.</F.Info>
      </F.InfoContainer>
    </F.FooterWrapper>
  );
};

export default Footer;
