import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { SECRET_SESSION_ID } from '../lib/secret.js';

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
  let { secret } = params.location.query;

  if(secret) {
    Session.set("SECRET_SESSION_ID", secret);
  } else {
    secret = Session.get("SECRET_SESSION_ID");
  }

  return {
    secret: secret
  };
}, AdminApp);
