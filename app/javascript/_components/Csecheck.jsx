import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Csecheck extends React.Component {
  render() {
    return (
      <div>
        <CheckboxRadioGroup
          type="checkbox"
          heading="Confd"
          label="Confd"
          name="Confd"
          selectedOptions={['']}
          options={['This case involves CSEC Data']}
        />
      </div>
    );
  }
}
export default Csecheck;
