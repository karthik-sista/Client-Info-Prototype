import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Pending extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Pending"
          label="Pending"
          name="test"
          selectedOptions={['']}
          options={['Pending']}
        />
      </div>
    );
  }
}
export default Pending;
