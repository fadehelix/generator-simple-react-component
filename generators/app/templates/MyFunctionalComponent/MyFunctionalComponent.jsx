import React from 'react';
import PropTypes from 'prop-types';

const MyFunctionalComponent = ({value}) =>
  <div className="MyFunctionalComponent">{value}</div>;

MyFunctionalComponent.defaultProps = {
  value: 'Some text'
};
MyFunctionalComponent.propTypes = {
  value: PropTypes.string
};

export default MyFunctionalComponent;
