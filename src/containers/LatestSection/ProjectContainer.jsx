import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LatestProjects from '../../components/LatestProjects';
import Paragraph from '../../components/Paragraph';
import { H3 } from '../../components/Headings';

class ProjectContainer extends Component {
  state = {
    loaded: false,
    visible: false,
  };
  showDemo = () => {};
  render() {
    const { project } = this.props;
    return (
      <LatestProjects.Item Id={project.id}>
        <LatestProjects.Header>
          <LatestProjects.Title
            as={H3}
            fontFamily="Lobster Two"
            fontSize="2rem"
            Color="#fff"
          >
            { project.title }
          </LatestProjects.Title>
          <Paragraph lineHeight={1.2}>{ project.description }</Paragraph>
          <LatestProjects.Button to={`/projects/${project.id}`}>demo</LatestProjects.Button>
        </LatestProjects.Header>
        <LatestProjects.Poster imgSrc={project.imgSrc} imgAlt={project.imgAlt} />
      </LatestProjects.Item>
    );
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.object,
};

export default ProjectContainer;