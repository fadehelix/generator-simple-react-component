import React from 'react';
import renderer from 'react-test-renderer';
import MyClassComponent from './MyClassComponent.jsx';

describe('MyClassComponent', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MyClassComponent value="testing text"/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

