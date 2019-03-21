import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowUpSvg from './ArrowUpSvg';

const Wrapper = styled.div`
  animation: ${({ Toggle }) => {
    if (Toggle) {
      return 'slideDown .25s linear forwards';
    } else if (Toggle === null) {
      return 'none';
    }
    return 'slideUp .25s linear forwards';
  }};

  position: fixed;
  display: block;
  transform: translateZ(0);
  right: 50px;
  bottom: 150px;
  z-index: 9999;
  opacity: 0;

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-50%) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-50%) translateZ(0);
    }
  }
`;

const ArrowUp = ({ Toggle, onClick }) => (
  <Wrapper Toggle={Toggle} onClick={onClick}>
    <ArrowUpSvg />
  </Wrapper>
);

ArrowUp.propTypes = {
  Toggle: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ArrowUp;
