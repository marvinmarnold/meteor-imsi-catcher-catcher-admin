import React from 'react';
import { Link } from 'react-router';

import { ADMIN_PATHS, adminPathFor } from '../../lib/admin-paths.jsx';

export default class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to={"/" + ADMIN_PATHS.HOME}>Admin Home</Link>
        </li>
        <li>
          <Link to={adminPathFor(ADMIN_PATHS.SIM_READINGS)}>SIM Readings</Link></li>
        <li>
          <Link to={adminPathFor(ADMIN_PATHS.TELEPHONY_READINGS)}>Telephony Readings</Link>
        </li>
        <li>
          <Link to={adminPathFor(ADMIN_PATHS.NEIGHBOR_READINGS)}>Neighbor Readings</Link>
        </li>
      </ul>
    )
  }
}
