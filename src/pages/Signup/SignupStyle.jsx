import styled from 'styled-components';

const SignupWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SignupHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 56px;
  left: 16px;
  line-height: 33px;
`;

const SignupTitle = styled.h1`
  width: 149px;
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
`;

const SignupText = styled.span`
  width: 198px;
  color: var(--sub-font--color);
  font-size: var(--font-md);
  line-height: 33px;
`;

const SignupMain = styled.main`
  margin: 0 auto;
  width: 328px;
  position: absolute;
  top: 287px;
  text-align: center;

  left: 16px;
`;

const SignupBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-bottom: 24px;
  color: var(--font-color);
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 131px;
    height: 1px;

    background-color: black;
  }

  &:before {
    left: -4px;
    background-color: var(--border-color);
  }

  &:after {
    right: -4px;
    background-color: var(--border-color);
  }
`;

const NavLoign = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const NavSpan = styled.nav`
  font-size: var(--font-sm);
  color: var(--sub-font--color);
  padding-right: 4px;
  line-height: 17px;
`;

const LinkLogin = styled.span`
  font-size: var(--font-sm);
  color: var(--font-color);
  cursor: pointer;
  border-bottom: 1px solid var(--font-color);
  line-height: 17px;
`;

const Footer = styled.footer`
  margin: 0 auto;
  position: absolute;
  top: 742px;
  width: 220px;
  height: 34px;
  display: flex;
  left: 70px;

  text-align: center;
`;

const FooterSpan = styled.span`
  font-size: var(--font-sm);
  color: #575757;
  padding-right: 4px;
  line-height: 17px;
`;

export {
  SignupWrap,
  SignupHeader,
  SignupTitle,
  SignupText,
  SignupMain,
  SignupBtnBox,
  Span,
  NavLoign,
  NavSpan,
  LinkLogin,
  Footer,
  FooterSpan,
};
