import React from 'react';
import PropTypes from 'prop-types';
import { DropDownField } from 'react-wood-duck';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.label = {
      name: 'heading',
    };
  }
  render() {
    return (
      <div>
        {this.props.label}
        <DropDownField options={['Legal', 'Illegal']} />
      </div>
    );
  }
}
DropDown.propTypes = {
  label: PropTypes.string,
};
export default DropDown;
