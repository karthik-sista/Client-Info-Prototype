import React from 'react';
import Yes from '../_components/Yes';
import No from '../_components/No';
import Unknown from '../_components/Unknown';
import Pending from '../_components/Pending';
import Notasked from '../_components/Notasked';
import Nap from '../_components/Nap';
import Dknw from '../_components/Dknw';
import DropDown from '../_components/DropDown';

class Ethinicity extends React.Component {
  render() {
    return (
      <div className="panel panel-default" style={{ margin: '15px' }}>
        <div className="panel panel-default ">
          {' '}
          <h3 style={{ margin: '15px' }}>Ethinicity </h3>{' '}
        </div>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <label>Specify Primary Race If Known</label>
            <DropDown />
          </div>
          <div className="row center-block col-lg-2">
            <label>Unable to Determine - Reason</label>
            <DropDown />
          </div>
        </div>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <label>Other Ethinicity</label>
            <DropDown />
          </div>
        </div>
        <label className="col-lg-12">Hispanic or Latino Origin</label>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <Yes />
          </div>
          <div className="row center-block col-lg-2">
            <No />
          </div>
          <div className="row center-block col-lg-2">
            <Dknw />
          </div>
          <div className="row center-block col-lg-2">
            <Nap />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-lg-2">
            <DropDown name="Unable to Determine - Reason" />
          </div>
        </div>
      </div>
    );
  }
}

export default Ethinicity;
