import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as Font from '@components/Font';
import close from '@assets/svg/close.svg';

const Modal = () => {
  const [closeState, setCloseState] = useState(true);
  const modalRef = useRef();

  const CloseHandler = () => {
    if (closeState) {
      setCloseState(false);
    } else {
      setCloseState(true);
    }
  };

  const handleClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) {
      setCloseState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return (
    <Background active={closeState} ref={modalRef} onBlur={() => setCloseState(true)}>
      <ModalCard>
        <ChildrenFrame>
          <CloseIcon src={close} alt="close" onClick={CloseHandler} />
          <Font.FontSize18>모달 배너</Font.FontSize18>
        </ChildrenFrame>
      </ModalCard>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const ModalCard = styled.div`
  position: absolute;
  top: 30%;
  right: 50%;
  padding: 50px;
  width: 60vw;
  height: 60vh;
  border-radius: ${({ theme }) => theme.radius.radius20};
  transform: translateY(-30%) translateX(50%);
  background-color: ${({ theme }) => theme.colors.White};
`;

const ChildrenFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding-right: ${({ theme }) => theme.spacing.space8};
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 8%;
  right: 6%;
  cursor: pointer;
`;
