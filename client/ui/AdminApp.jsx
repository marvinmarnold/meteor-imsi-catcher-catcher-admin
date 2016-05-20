import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Navbar from './components/Navbar.jsx';

class AdminApp extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, {
          secret: this.props.secret
        })}
      </div>
    )
  }
}

export default createContainer((params) => {
  const { secret } = params.location.query;
  return {
    secret: secret
  };
}, AdminApp);
