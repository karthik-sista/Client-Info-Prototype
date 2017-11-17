import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Notasked extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="radio"
          heading="Notasked"
          label="Notasked"
          name="test"
          selectedOptions={['']}
          options={['Not asked']}
        />
      </div>
    );
  }
}
export default Notasked;
