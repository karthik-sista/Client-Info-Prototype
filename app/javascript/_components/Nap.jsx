import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Nap extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Nap"
          label="Nap"
          name="test"
          selectedOptions={['']}
          options={['Not Applicable']}
        />
      </div>
    );
  }
}
export default Nap;
