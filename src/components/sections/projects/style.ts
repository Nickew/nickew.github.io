import styled from 'styled-components';
import media from '@styles/media';

type SliderArrowProps = {
  className: string;
  style: any;
  onClick: Function;
};

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0;
`;

export const Subtitle = styled.span`
  display: inline-block;
  opacity: 0;
`;

export const List = styled.div`
  position: relative;
  margin: 80px -10px 20px -10px;
  opacity: 0;

  ${media.medium`
    margin: 80px -20px 100px -20px;
  `}

  .slick-slide > div {
    height: 100%;
  }
`;

export const SliderArrows = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;

export const SliderArrow = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  position: absolute;
  top: -40px;
  cursor: pointer;

  &.slick-prev {
    left: 20px;
  }
  &.slick-next {
    right: 20px;
  }
  &.slick-disabled {
    color: #3c4e73;
    cursor: not-allowed;
  }
`;

export const Dots = styled.ul`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  display: none;

  ${media.medium`
    display: flex;
  `}

  & > li {
    margin-right: 15px;
    ${media.medium`
      margin-right: 10px;
    `}
    &:last-child {
      margin-right: 0;
    }
    & > button {
      transition: background, border-color 250ms;
      background: none;
      color: ${({ theme }) => theme.text};
      font-weight: bold;
      border: 1px solid #3c4e73;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        border-color: ${({ theme }) => theme.text};
      }
    }
    &.slick-active > button {
      color: #3c4e73;
      background: ${({ theme }) => theme.text};
      border-color: transparent;
    }
  }
`;
