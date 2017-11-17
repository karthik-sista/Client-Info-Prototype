import React from 'react';

import { CheckboxRadioGroup } from 'react-wood-duck';

class Confd extends React.Component {
  render() {
    return (
      <div>
        CONFIDIENTIALITY
        <CheckboxRadioGroup
          type="checkbox"
          heading="Confd"
          label="Confd"
          name="Confd"
          selectedOptions={['']}
          options={['Confidentiality in effect']}
        />
      </div>
    );
  }
}
export default Confd;
