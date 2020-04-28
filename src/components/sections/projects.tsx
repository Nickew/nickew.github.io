import React from 'react';
import styled from 'styled-components';

import Container from '@components/container';
import Project from '@components/project';
import Section from '@components/section';

import useInView from '@hooks/useInView';

import { fadeInUp } from '@styles/animations';

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: ${({ theme }: { theme: any }) => theme.text};

  opacity: 0;
  visibility: hidden;

  &.visible {
    visibility: visible;
    animation: ${fadeInUp} 250ms forwards linear;
    animation-delay: 250ms;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 15px;
`;

const Projects = ({ data }: { data: any }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 }, true);

  const visibleClassname = isInView ? 'visible' : '';

  return (
    <Section id="projects">
      <Wrapper ref={ref}>
        <Container>
          <SectionTitle className={visibleClassname}>
            Other projects
          </SectionTitle>
          <Grid>
            {data.map((el: any) => {
              const { frontmatter, id, html } = el.node;
              const { date, title, tech, github, external } = frontmatter;

              return (
                <Project
                  key={id}
                  title={title}
                  description={html}
                  github={github}
                  external={external}
                  tools={tech}
                  date={date}
                  className={visibleClassname}
                />
              );
            })}
          </Grid>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Projects;
