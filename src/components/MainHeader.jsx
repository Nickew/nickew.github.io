import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1, H2 } from './Headings';
import { device } from './breakpoints';
import headerImage from '../assets/img/header-bg.jpg';
import Header from './Header';

const MainHeader = styled(Header)`
  background-color: #1d3247;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    opacity: 0.75;
    filter: contrast(115%);
    background: linear-gradient(
      180deg,
      rgba(17, 236, 131, 0.5) 0%,
      rgba(0, 94, 175, 0.5) 100%
    );
  }
`;

const Title = styled(H1)`
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.tabletSmall} {
    font-size: 2rem;
  }
`;

const SubTitle = styled(H2)`
  margin: 15px 0 25px 0;
  max-width: 500px;
  @media ${device.tablet} {
  }
  @media ${device.tabletSmall} {
  }
`;

MainHeader.propTypes = {
  children: PropTypes.any,
};

MainHeader.Title = Title;
MainHeader.SubTitle = SubTitle;

export default MainHeader;
