import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class No extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="No"
          label="No"
          name="test"
          selectedOptions={['']}
          options={['No']}
        />
      </div>
    );
  }
}
export default No;
