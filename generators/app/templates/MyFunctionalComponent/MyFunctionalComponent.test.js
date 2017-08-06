import React from 'react';
import renderer from 'react-test-renderer';
import MyFunctionalComponent from './MyFunctionalComponent.jsx';

describe('MyFunctionalComponent', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MyFunctionalComponent value="testing text"/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

