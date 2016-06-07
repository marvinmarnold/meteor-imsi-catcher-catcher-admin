import React from 'react';
import { Link } from 'react-router';

import { ADMIN_PATHS, adminPathFor } from '../../lib/admin-paths.jsx';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link to={"/" + ADMIN_PATHS.HOME}>Admin Home</Link>

        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className='nav-link' to={adminPathFor(ADMIN_PATHS.SIM_READINGS)}>
              SIM Readings
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={adminPathFor(ADMIN_PATHS.TELEPHONY_READINGS)}>
              Telephony Readings
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={adminPathFor(ADMIN_PATHS.NEIGHBOR_READINGS)}>
              Neighbor Readings
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={adminPathFor(ADMIN_PATHS.DETECTIONS)}>
              Detections
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
