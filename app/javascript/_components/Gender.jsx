import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Gender extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="checkbox"
          heading="Gender"
          label="Gender"
          name="test"
          selectedOptions={['']}
          options={['Client is Minor/ NMD Parent', 'Outstand Warrant Exists']}
        />
      </div>
    );
  }
}
export default Gender;
