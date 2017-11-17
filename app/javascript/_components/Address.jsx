import React from 'react';

import { CommonAddressComponent } from 'react-wood-duck';

class Address extends React.Component {
  render() {
    return (
      <div>
        <CommonAddressComponent
          addressType=""
          id=""
          addressTitle=""
          suggestions={['']}
          stateTypes={['']}
        />
      </div>
    );
  }
}
export default Address;
