import styled, {keyframes} from 'styled-components';

const Preloader = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  overflow: hidden;
  margin: 33vh auto auto ;
`;

 const containerAnimation = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  & div {
    box-sizing: border-box !important;
  }

  & > div {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 28px;
    left: 28px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #32a0da transparent #32a0da transparent;
    animation: ${containerAnimation} 1.25s linear infinite;
  }

  & > div:nth-child(2),
  & > div:nth-child(4) {
    width: 108px;
    height: 108px;
    top: 46px;
    left: 46px;
    animation: ${containerAnimation} 1.25s linear infinite reverse;
  }

  & > div:nth-child(2) {
    border-color: transparent #7fbb42 transparent #7fbb42;
  }

  & > div:nth-child(3) {
    border-color: transparent;
  }

  & > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  & > div:nth-child(3) div:before,
  & > div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 48px;
    background: #32a0da;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #32a0da;
  }

  & > div:nth-child(3) div:after {
    left: -16px;
    top: 48px;
    box-shadow: 128px 0 0 0 #32a0da;
  }

  & > div:nth-child(4) {
    border-color: transparent;
  }

  & > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  & > div:nth-child(4) div:before,
  & > div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 30px;
    background: #7fbb42;
    border-radius: 50%;
    box-shadow: 0 92px 0 0 #7fbb42;
  }

  & > div:nth-child(4) div:after {
    left: -16px;
    top: 30px;
    box-shadow: 92px 0 0 0 #7fbb42;
  }
`;

const Block = styled.div``;

export { Preloader, Container, Block };
