import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';
import React from 'react';


import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';

class DetectionsPage extends React.Component {
  renderDetection(detection) {
    return (
      <tr key={detection._id}>
        <th scope="row">{detection.deviceId}</th>
        <td>{detection.isTest.toString()}</td>
        <td>{detection.basestationId}</td>
        <td>{detection.detectorName}</td>
        <td>{detection.score}</td>
        <td>{detection.message}</td>
        <td>{detection.longitude}</td>
        <td>{detection.latitude}</td>
        <td>{moment(detection.createdAt).format()}</td>
        <td>{detection.readingIds[0]}</td>
      </tr>
    );
  }

  // Render readings or display loading screen
  renderDetections() {
    if(this.props.ready) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Device ID</th>
              <th>Is test</th>
              <th>Basestation ID</th>
              <th>Detector Name</th>
              <th>Score</th>
              <th>Message</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Created at</th>
              <th>Reading IDs</th>
            </tr>
          </thead>
          <tbody>
            {this.props.detections.map(this.renderDetection)}
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
        <h1>Detections Page</h1>
        {this.renderDetections()}
      </div>
    )
  }
}

export default createContainer( ({secret}) => {
  const detectionsHandle = Meteor.subscribe('catcher.secrets.detections', secret);
  const ready = detectionsHandle.ready();
  const detections = Catcher.Detections.find().fetch();

  return {
    ready: ready,
    detections: detections
  };
}, DetectionsPage);
