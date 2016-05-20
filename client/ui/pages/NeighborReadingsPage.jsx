import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';
import React from 'react';


import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';

class NeighborReadingsPage extends React.Component {
  renderReading(reading) {
    return (
      <tr key={reading._id}>
        <th scope="row">{reading.commonReading.readingType}</th>
        <td>{reading.commonReading.deviceId}</td>
        <td>{reading.commonReading.deviceScannerId}</td>
        <td>{reading.commonReading.arfcn}</td>
        <td>{reading.commonReading.frequency}</td>
        <td>{moment(reading.commonReading.createdAt).format()}</td>
        <td>{moment(reading.commonReading.updatedAt).format()}</td>
          <td>{reading.cid}</td>
          <td>{reading.lac}</td>
          <td>{reading.psc}</td>
          <td>{reading.signalStrengthDBM}</td>
          <td>{reading.networkType}</td>
      </tr>
    );
  }

  // Render readings or display loading screen
  renderReadings() {
    if(this.props.ready) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Reading Type</th>
              <th>Device ID</th>
              <th>Device Scanner ID</th>
              <th>ARFCN</th>
              <th>Frequency</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>CID</th>
              <th>LAC</th>
              <th>PSC</th>
              <th>Signal Strength (dbm)</th>
              <th>Network Type</th>
            </tr>
          </thead>
          <tbody>
            {this.props.readings.map(this.renderReading)}
          </tbody>
        </table>
      );
    } else {
      return (
        <h1>Loading..</h1>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Neighbor Readings Page</h1>
        {this.renderReadings()}
      </div>
    )
  }
}

export default createContainer( ({secret}) => {
  const readingsHandle = Meteor.subscribe('catcher.secrets.neighbor-readings', secret);
  const ready = readingsHandle.ready();
  const readings = Catcher.NeighborReadings.find().fetch();

  return {
    ready: ready,
    readings: readings
  };
}, NeighborReadingsPage);
