import React from 'react';
import Yes from '../_components/Yes';
import No from '../_components/No';
import Unknown from '../_components/Unknown';
import Pending from '../_components/Pending';
import Notasked from '../_components/Notasked';
import Nap from '../_components/Nap';
import Dknw from '../_components/Dknw';
import DropDown from '../_components/DropDown';

class OtherClientInfo extends React.Component {
  render() {
    return (
      <div className="panel panel-default" style={{ margin: '15px' }}>
        <div className="panel panel-default ">
          {' '}
          <h3 style={{ margin: '15px' }}>Other Client Information </h3>{' '}
        </div>
        <label className="col-lg-12">Icwa Eligible</label>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <Yes />
          </div>
          <div className="row center-block col-lg-2">
            <No />
          </div>
          <div className="row center-block col-lg-2">
            <Notasked />
          </div>
          <div className="row center-block col-lg-2">
            <Pending />
          </div>
        </div>
        <label className="col-lg-12">Incapaciated Parent</label>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <Yes />
          </div>
          <div className="row center-block col-lg-2">
            <No />
          </div>
          <div className="row center-block col-lg-2">
            <Unknown />
          </div>
          <div className="row center-block col-lg-2">
            <Nap />
          </div>
        </div>
        <div className="row center-block">
          <div className="row center-block col-lg-2">
            <label>Primary Language</label>
            <DropDown />
          </div>
          <div className="row center-block col-lg-2">
            <label>Secondary Language</label>
            <DropDown />
          </div>
        </div>

        <label className="col-lg-12">Literate</label>
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
      </div>
    );
  }
}
export default OtherClientInfo;
