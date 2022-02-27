import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Font from '@components/Font';
import menu from '@assets/svg/menu.svg';

const MENULIST = [
  { title: '남스짐이란?', link: '/info', defaultlink: '/info' },
  {
    title: '지점소개',
    link: '/store-info',
    defaultlink: '/store-info/one',
  },
  {
    title: '비포애프터',
    link: '/bofore-after',
    defaultlink: '/bofore-after',
  },
  {
    title: '리얼PT후기',
    link: '/review',
    defaultlink: '/review',
  },
  {
    title: '이벤트',
    link: '/event',
    defaultlink: '/event',
  },
  {
    title: '문의하기',
    link: '/contact',
    defaultlink: '/contact',
  },
];

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nthChildPath = pathname.split('/')[1];

  const mobileMenuHandler = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  return (
    <React.Fragment>
      <NavFrame>
        <LogoFrame onClick={() => navigate('/')}>
          <div>남스짐로고</div>
          {/* <img src={logo} alt="logo" /> */}
        </LogoFrame>

        <MenuFrame>
          {MENULIST.map((val, idx) => {
            return (
              <MenuList
                key={idx}
                active={val.link === `/${nthChildPath}`}
                onClick={() => navigate(`${val.defaultlink}`)}
              >
                <Font.FontSize16>{val.title}</Font.FontSize16>
              </MenuList>
            );
          })}
        </MenuFrame>

        <Menu src={menu} alt="menu" onClick={mobileMenuHandler} />
      </NavFrame>

      {/* mobile */}
      <MobileMenuFrame active={mobileMenu}>
        {MENULIST.map((val, idx) => {
          return (
            <MobileMenuItem
              key={idx}
              active={val.link === `/${nthChildPath}`}
              onClick={() => navigate(`${val.defaultlink}`)}
            >
              <Font.FontSize16>{val.title}</Font.FontSize16>
            </MobileMenuItem>
          );
        })}
      </MobileMenuFrame>
    </React.Fragment>
  );
};

export default Navigation;

const NavFrame = styled.div`
  display: flex;
  height: 13vh;
  justify-content: space-around;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.space56};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.White};

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    height: 13vh;
  }
`;

const LogoFrame = styled.div`
  display: flex;
  margin-right: 20px;
  cursor: pointer;

  div {
    font-size: ${({ theme }) => theme.sizes.font18};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const MenuFrame = styled.ul`
  display: flex;
  justify-content: center;
  gap: 60px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  &:hover p {
    transition: 0.3s ease-out;
    color: #e2c275;
  }

  p {
    color: ${({ active }) => (active ? '#E2C275' : '')};
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Menu = styled.img`
  width: 30px;
  height: 30px;
  visibility: hidden;
  justify-self: end;
  cursor: pointer;

  @media (max-width: 1100px) {
    visibility: visible;
  }
`;

const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const MobileMenuFrame = styled.ul`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  padding: 20px 0px;
  animation: ${SlideDown} 0.3s;

  @media (min-width: 1100px) {
    display: none;
  }
`;

const MobileMenuItem = styled.li`
  font-size: ${({ theme }) => theme.sizes.font16};
  cursor: pointer;
  margin-top: 15px;

  p {
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  &:hover p,
  &:hover li {
    color: #e2c275;
    transition: 0.3s ease-out;
  }
`;
