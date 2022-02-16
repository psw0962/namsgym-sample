import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '@components/Navigation';

const Layout = () => {
  return (
    <LayoutFrame>
      <Navigation />
      <MainFrame>
        <Outlet />
      </MainFrame>
    </LayoutFrame>
  );
};

const LayoutFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.Background};
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  max-width: 1200px;
  margin: 0 auto;
  /* min-height: calc(100vh - 16vh); */
  min-height: 100vh;
`;

export default Layout;
