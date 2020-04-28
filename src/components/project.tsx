import React from 'react';
import styled from 'styled-components';

import GithubIcon from './assets/github';
import ExternalIcon from './assets/external';

import { fadeInDownShort, fadeInUpShort } from '@styles/animations';

type ProjectProps = {
  title: string;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
  className: string;
};

const Wrapper = styled.article`
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  /* background-color: ${({ theme }: { theme: any }) => theme.contrastLow}; */
  padding: 20px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  visibility: hidden;
  opacity: 0;

  &.visible {
    visibility: visible;
    animation: ${fadeInUpShort} 250ms forwards linear;
    animation-delay: 500ms;
    &:nth-child(2n) {
      animation: ${fadeInDownShort} 250ms forwards linear;
      animation-delay: 500ms;
    }
  }
`;
const Content = styled.header`
  margin-bottom: 15px;
`;
const Title = styled.h3`
  margin-bottom: 15px;
  color: ${({ theme }: { theme: any }) => theme.text};
`;
const Description = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.35;

  a:hover {
    text-decoration: underline;
  }
`;
const Date = styled.div`
  margin-top: 3px;
  font-size: 14px;
  float: right;
`;

const LinkWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > a {
    vertical-align: middle;
    fill: ${({ theme }: { theme: any }) => theme.text};
    transition: fill 250ms;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:hover {
      fill: ${({ theme }: { theme: any }) => theme.text};
    }
  }
`;

const Tools = styled.ul`
  display: inline-flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

const Tool = styled.li`
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 5px;
  opacity: 0.7;
  &:last-child {
    margin-right: 0;
  }
`;

const Project = (props: ProjectProps) => {
  return (
    <Wrapper className={props.className}>
      <Content>
        <Date>{props.date}</Date>
        <Title>{props.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: props.description }} />
        <Tools>
          {props.tools &&
            props.tools.map((tool) => <Tool key={tool}>{tool}</Tool>)}
        </Tools>
      </Content>
      <LinkWrapper>
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        )}
        {props.external && (
          <a href={props.external} target="_blank" rel="noopener noreferrer">
            <ExternalIcon />
          </a>
        )}
      </LinkWrapper>
    </Wrapper>
  );
};

export default Project;
