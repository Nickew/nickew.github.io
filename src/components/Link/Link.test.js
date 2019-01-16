import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Link from './Link';

const href = 'http://github.com/';
const children = 'Test';

const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Link href={href} {...props}>
      {children}
    </Link>);

  return enzymeFind(wrapper, Link);
};

describe('<Link />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('a');
  });
  it('should have an href attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('href')).toBe(href);
  });
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should adopt a target attribute', () => {
    const target = '_blank';
    const renderedComponent = renderComponent({ target });
    expect(renderedComponent.prop('target')).toEqual(target);
  });
});

