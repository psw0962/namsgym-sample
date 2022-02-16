import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as Font from '@components/Font';

const Main = ({ mainHeader, children }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <MainFrame>
        <Wrapper>
          <div>
            <TitleWrapper>
              <Font.FontSize24>{mainHeader.title}</Font.FontSize24>
            </TitleWrapper>

            <pre>
              <SubTitle>{mainHeader.subtitle}</SubTitle>
            </pre>
          </div>
        </Wrapper>

        {children}
      </MainFrame>
    </React.Fragment>
  );
};

export default Main;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding: 40px 50px;
  margin-top: 35px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: ${({ theme }) => theme.radius.radius20};

  @media (max-width: 1100px) {
    width: 100%;
    padding: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 575px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 15px;

  p {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const SubTitle = styled(Font.FontSize16)`
  color: ${({ theme }) => theme.colors.MainGray};
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 26px;
  white-space: pre-wrap;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;
