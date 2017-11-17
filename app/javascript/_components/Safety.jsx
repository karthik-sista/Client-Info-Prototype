import React from 'react';

import DummyInput from '../_components/DummyInput';
import DropDown from '../_components/DropDown';
import { Textarea } from 'react-wood-duck';
import Ta from '../_components/Ta';

class Safety extends React.Component {
  render() {
    return (
      <div className="panel panel-default" style={{ margin: '15px' }}>
        <div className="panel panel-default ">
          {' '}
          <h3 style={{ margin: '15px' }}>Safety Alert Information </h3>{' '}
        </div>
        <label style={{ margin: '15px' }}> Safety Alert Activation </label>
        <div className="row center-block">
          <div className="col-lg-2">
            <DummyInput name="Activation Date" />
          </div>
          <div className="col-xs-2 ">
            <DropDown name="Name" options={['Legal', 'Illegal']} />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-lg-2">
            <Ta />
          </div>
        </div>
        <label style={{ margin: '15px' }}> Safety Alert DeActivation </label>
        <div className="row center-block ">
          <div className="col-lg-2">
            <DummyInput name="DeActivation Date" />
          </div>
          <div className="col-xs-2 ">
            <DropDown name="Name" options={['Legal', 'Illegal']} />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-lg-2">
            <Ta />
          </div>
        </div>
      </div>
    );
  }
}
export default Safety;
