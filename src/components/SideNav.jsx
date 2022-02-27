import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Font from '@components/Font';

const SideNav = props => {
  const { sideNavTitle, sideNavData } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname.split('/')[2];

  return (
    <SideNavFrame>
      <Header>
        <Font.FontSize22>{sideNavTitle.title}</Font.FontSize22>
      </Header>

      <Line />

      {sideNavData.map((val, idx) => {
        const currentPathName = val.link.split('/')[2];

        return (
          <MenuFrame key={idx} active={currentPathName === pathName}>
            <Font.FontSize18 onClick={() => navigate(val.link)}>{val.title}</Font.FontSize18>
          </MenuFrame>
        );
      })}
    </SideNavFrame>
  );
};

export default SideNav;

const SideNavFrame = styled.div`
  width: 20vw;
  padding: 30px 35px 30px 35px;
  margin-top: 35px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: ${({ theme }) => theme.radius.radius20};

  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    padding: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: start;

  p {
    color: #e2c275;
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const Line = styled.hr`
  margin: 30px -30px 30px -30px;
`;

const MenuFrame = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: start;
  margin-top: 24px;

  p {
    font-weight: ${({ theme }) => theme.weight.regular};
    flex-grow: 1;
    cursor: pointer;
  }

  &:hover p {
    transition: 0.3s ease-out;
    color: ${({ active }) => !active && '#E2C275'};
  }

  p {
    color: ${({ active }) => active && '#E2C275'};
  }
`;
