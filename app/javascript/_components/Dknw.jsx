import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Dknw extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Dknw"
          label="Dknw"
          name="test"
          selectedOptions={['']}
          options={['Dont Know']}
        />
      </div>
    );
  }
}
export default Dknw;
