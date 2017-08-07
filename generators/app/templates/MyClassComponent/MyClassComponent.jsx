import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true
    };
  }

  render() {
    return (
      <div className="MyClassComponent">{this.props.value}</div>
    );
  }
}

MyClassComponent.defaultProps = {
  value: 'Some text'
};
MyClassComponent.propTypes = {
  value: PropTypes.string
};

export default MyClassComponent;
