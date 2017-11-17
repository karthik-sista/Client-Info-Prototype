import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Yes extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Yes"
          label="Yes"
          name="Yes"
          selectedOptions={['']}
          options={['Yes']}
        />
      </div>
    );
  }
}
export default Yes;
