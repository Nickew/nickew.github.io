import React from 'react';
import PropTypes from 'prop-types';

import ProjectTools from './ProjectTools';
import Gallery from './Gallery';
import Links from './Links';

import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import Span from '../../components/Span';
import HR from '../../components/HR';

const InnerProjectContainer = ({ project }) => {
  const {
    title,
    date,
    description,
    sourceLink,
    demoLink,
    tools,
    devTools,
    images,
  } = project;
  return (
    <Section>
      <Grid>
        <Row justifyContent="space-between" Padding="50px 0 0 0">
          <Col xs={12} lg={7}>
            <H2 FontSize="2rem" FontFamily="Merriweather" FontStyle="italic">
              {title}
            </H2>
            <HR Color="#E5E5E5" />
            <Span Color="#999999">{date}</Span>
            <Paragraph Margin="20px 0" FontFamily="Ubuntu" FontWeight="300" Color="#212121">
              {description}
            </Paragraph>
            <HR Color="#E5E5E5" />
            <Links>
              {sourceLink && (
                <Links.Item
                  github
                  title="github source page"
                  target="_blank"
                  rel="noopener"
                  href={sourceLink}
                >
                  github source
                </Links.Item>
              )}
              {demoLink && (
                <Links.Item
                  title="live website"
                  target="_blank"
                  rel="noopener"
                  href={demoLink}
                >
                  visit website
                </Links.Item>
              )}
            </Links>
          </Col>
          <Col xs={12} lg={4} Padding="20px 0 0 0">
            <ProjectTools tools={tools} devTools={devTools} />
          </Col>
        </Row>
        <Gallery images={images} />
      </Grid>
    </Section>
  );
};

InnerProjectContainer.propTypes = {
  project: PropTypes.object.isRequired,
};

export default InnerProjectContainer;
