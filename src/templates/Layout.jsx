import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '@components/Navigation';

const Layout = () => {
  return (
    <LayoutFrame>
      <Navigation />
      <Kakao>오픈채팅</Kakao>
      <Blog>블로그</Blog>
      <Insta>인스타</Insta>
      <Youtube>유튜브</Youtube>
      <MainFrame>
        <Outlet />
      </MainFrame>
    </LayoutFrame>
  );
};

const LayoutFrame = styled.div`
  /* background-color: ${({ theme }) => theme.colors.Background}; */
  background-color: #f4f4f4;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  /* min-height: calc(100vh - 16vh); */
  min-height: 100vh;
`;

const Kakao = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid red;
  border-radius: 100%;
  cursor: pointer;
`;

const Insta = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid red;
  border-radius: 100%;
  cursor: pointer;
`;

const Blog = styled.div`
  position: fixed;
  right: 20px;
  bottom: 180px;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid red;
  border-radius: 100%;
  cursor: pointer;
`;

const Youtube = styled.div`
  position: fixed;
  right: 20px;
  bottom: 260px;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border: 1px solid red;
  border-radius: 100%;
  cursor: pointer;
`;

export default Layout;
