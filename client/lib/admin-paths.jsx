import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import AdminApp from '../ui/AdminApp.jsx';
import AdminPage from '../ui/pages/AdminPage.jsx';
import SIMReadingsPage from '../ui/pages/SIMReadingsPage.jsx';
import TelephonyReadingsPage from '../ui/pages/TelephonyReadingsPage.jsx';
import NeighborReadingsPage from '../ui/pages/NeighborReadingsPage.jsx';

export const ADMIN_PATHS = {
  HOME: "admin",
  SIM_READINGS: "sim-readings",
  TELEPHONY_READINGS: "telephony-readings",
  NEIGHBOR_READINGS: "neighbor-readings"
}

export function adminPathFor(endpoint) {
  return "/" + ADMIN_PATHS.HOME + "/" + endpoint
}

export function getAdminRoutes() {
  return (
    <Route path={ADMIN_PATHS.HOME} component={AdminApp} >
      <IndexRoute component={AdminPage} />
      <Route path={ADMIN_PATHS.SIM_READINGS} component={SIMReadingsPage} />
      <Route path={ADMIN_PATHS.TELEPHONY_READINGS} component={TelephonyReadingsPage} />
      <Route path={ADMIN_PATHS.NEIGHBOR_READINGS} component={NeighborReadingsPage} />
    </Route>
  )
}
