import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Modal from '@components/Modal';
import Footer from '@components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <React.Fragment>
      <Modal />

      <Wrapper>
        <CustomSlider {...settings}>
          <BannerBox>
            <div>광고배너1</div>
          </BannerBox>
          <BannerBox>
            <div>광고배너2</div>
          </BannerBox>
          <BannerBox>
            <div>광고배너3</div>
          </BannerBox>
          <BannerBox>
            <div>광고배너4</div>
          </BannerBox>
          <BannerBox>
            <div>광고배너5</div>
          </BannerBox>
          <BannerBox>
            <div>광고배너6</div>
          </BannerBox>
        </CustomSlider>

        <TopBannerBox>
          <p>메인 광고 배너1</p>
        </TopBannerBox>

        <TopBannerBox>
          <p>메인 광고 배너2</p>
        </TopBannerBox>

        <TopBannerBox>
          <p>메인 광고 배너3</p>
        </TopBannerBox>
      </Wrapper>

      <Footer />
    </React.Fragment>
  );
};

export default Landing;

const TopBannerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  border: 1px solid red;
  margin-top: 100px;
  margin-bottom: 100px;

  p {
    font-size: ${({ theme }) => theme.sizes.font18};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CustomSlider = styled(Slider)`
  margin-top: 50px;

  .slick-prev:before,
  .slick-next:before {
    color: #404040;
  }
`;

const BannerBox = styled.div`
  text-align: center;
  line-height: 300px;
  border: 1px solid red;

  div {
    font-size: ${({ theme }) => theme.sizes.font18};
  }
`;
