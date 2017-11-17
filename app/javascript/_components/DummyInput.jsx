import React from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from 'react-wood-duck';

class DummyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'heading',
    };
  }
  render() {
    return (
      <div>
        <div>
          {this.props.label}
          <InputComponent />
        </div>
      </div>
    );
  }
}

DummyInput.propTypes = {
  label: PropTypes.string,
};

export default DummyInput;
