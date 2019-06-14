import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../../breakpoints';

const Wrapper = styled.section`
  position: relative;
  height: 710px;
  margin-top: 75px;
  background-color: hsl(210, 100%, 20%);
  border-radius: 5px;
  @media ${device.mobile} {
    height: 1400px;
  }
  @media ${device.mobileLarge} {
    height: 1260px;
  }
`;

const DecorationLine = styled.div`
  position: absolute;
  left: 50%;
  top: -35px;
  height: 70px;
  width: 2px;
  transform: translateX(-50%);
  background-color: hsl(210, 100%, 50%);
`;

const StyledAboutSection = ({ children }) => (
  <Wrapper>
    <DecorationLine />
    {children}
  </Wrapper>
);

StyledAboutSection.propTypes = {
  children: PropTypes.any,
};

export default StyledAboutSection;
