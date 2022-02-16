import { useLocation } from 'react-router-dom';
import SideNav from '@components/SideNav';
import Wrapper from '@components/Wrapper';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';

const sideNavTitle = { title: '남스짐 지점안내' };
const sideNavData = [
  {
    title: '안산 1호점',
    link: '/store-info/one',
  },
  {
    title: '부천범박 2호점',
    link: '/store-info/two',
  },
  {
    title: '오류동 3호점',
    link: '/store-info/three',
  },
  {
    title: '천왕 4호점',
    link: '/store-info/four',
  },
  {
    title: '부천옥길 5호점',
    link: '/store-info/five',
  },
  {
    title: '시흥능곡 6호점',
    link: '/store-info/six',
  },
  {
    title: '안산 7호점',
    link: '/store-info/seven',
  },
];

const StoreInfo = () => {
  const { pathname } = useLocation();
  const nthChildPath = pathname.split('/')[2];

  return (
    <Wrapper>
      <SideNav sideNavTitle={sideNavTitle} sideNavData={sideNavData} />

      {nthChildPath === 'one' && <One />}
      {nthChildPath === 'two' && <Two />}
      {nthChildPath === 'three' && <Three />}
      {nthChildPath === 'four' && <Four />}
      {nthChildPath === 'five' && <Five />}
      {nthChildPath === 'six' && <Six />}
      {nthChildPath === 'seven' && <Seven />}
    </Wrapper>
  );
};

export default StoreInfo;
