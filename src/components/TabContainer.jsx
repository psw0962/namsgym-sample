import styled from 'styled-components';
import TabData from '@components/TabData';
import * as Font from '@components/Font';
import kakao from '@assets/svg/kakao.svg';

const TabContainer = ({ setTabState, url }) => {
  return (
    <TabBoxWrapper>
      {TabData.map((v, idx) => {
        return (
          <TabBox key={idx} onClick={() => setTabState(v.tabIdx)}>
            <FontSize12>{v.tabname}</FontSize12>
          </TabBox>
        );
      })}

      <KakaoBox href={url} target="_blank">
        <KakaoImg src={kakao} alt="kakao" />
        <FontSize12>카카오톡 간편문의</FontSize12>
      </KakaoBox>
    </TabBoxWrapper>
  );
};

export default TabContainer;

const FontSize12 = styled(Font.FontSize12)`
  font-weight: bold;
`;

const TabBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const TabBox = styled.div`
  width: 140px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.MainGray};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transition: 0.5s;
    box-shadow: 1px 1px 1px;
  }

  @media (max-width: 1000px) {
    box-shadow: 1px 1px 1px;
  }
`;

const KakaoImg = styled.img`
  width: 15px;
  height: 15px;
`;

const KakaoBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 140px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.MainGray};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  background-color: #fef01b;

  &:hover {
    transition: 0.5s;
    box-shadow: 1px 1px 1px;
  }

  @media (max-width: 1000px) {
    box-shadow: 1px 1px 1px;
  }
`;
