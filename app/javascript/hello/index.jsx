import React from 'react';
import render from 'react-dom';
import ReactDOM from 'react-dom';

import GHeader from '../_components/GHeader';

import Safety from '../_components/Safety';
import ClientInfo from '../_components/ClientInfo';
import OtherClientInfo from '../_components/OtherClientInfo';
import Ethinicity from '../_components/Ethinicity';

ReactDOM.render(
  <div>
    <GHeader />

    <ClientInfo />
    <OtherClientInfo />
    <Ethinicity />
    <Safety />
  </div>,

  document.body.appendChild(document.createElement('div'))
);
