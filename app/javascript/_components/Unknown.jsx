import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Unknown extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Unknown"
          label="Unknown"
          name="test"
          selectedOptions={['']}
          options={['Unknown']}
        />
      </div>
    );
  }
}
export default Unknown;
