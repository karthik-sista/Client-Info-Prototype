import React from 'react';
import DummyInput from '../_components/DummyInput';
import DropDown from '../_components/DropDown';
import Confd from '../_components/Confd';
import Gender from '../_components/Gender';
import Csecheck from '../_components/Csecheck';

class ClientInfo extends React.Component {
  render() {
    return (
      <div className="panel panel-default" style={{ margin: '15px' }}>
        <div className="panel panel-default ">
          {' '}
          <h3 style={{ margin: '15px' }}>Client Information </h3>{' '}
        </div>
        <div className="row center-block ">
          <div className="col-lg-1 ">
            <DummyInput label="Prefix" />
          </div>
          <div className="col-lg-2 ">
            <DummyInput label="First Name*" />
          </div>
          <div className="col-lg-2 ">
            <DummyInput label="Middle Name" />
          </div>
          <div className="col-lg-2  ">
            <DummyInput label="Last Name*" />
          </div>
          <div className="col-lg-2   ">
            <DummyInput label="Suffix" />
          </div>
          <div className="col-lg-2 ">
            <DropDown />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-xs-2 ">
            <DropDown />
          </div>
          <div className="col-xs-2 ">
            <DropDown />
          </div>
          <div className="col-lg-2   ">
            <DummyInput label="SSN" />
          </div>
          <div className="col-lg-5">
            <DummyInput label="Client Index Number (CIN)" />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-xs-2 ">
            <DropDown />
          </div>
          <div className="col-lg-5">
            <DummyInput label="Driver's License #" />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-2">
            <DummyInput label="Date of Birth" />
          </div>
          <div className="col-lg-2">
            <DummyInput label="Age" />
          </div>

          <div className="col-xs-2 ">
            <DropDown label="Age Unit" />
          </div>
        </div>

        <div className="row center-block">
          <div className="col-lg-2">
            <DummyInput label="Client Number" />
          </div>
          <div className="col-lg-2">
            <DummyInput label="Alien Registration #" />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-lg-2">
            <Gender />
          </div>
        </div>

        <div className="row center-block">
          <div className="col-lg-2">
            <Confd />
          </div>
          <div className="col-lg-2">
            <DummyInput label="Confidentiality Effective Date" />
          </div>
        </div>
        <div className="row center-block">
          <div className="col-lg-2">
            <Csecheck />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientInfo;
