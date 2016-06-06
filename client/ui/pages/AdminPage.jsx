import React from 'react';

export default class AdminPage extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <h1>Admin Page</h1>
        Use the tabs above to navigate collected data sets.
        In order to view data, you will need to attach the secret key to the URL, like:
        <br/>
        <code>https://stingraymappingproject.org/admin/sim-readings?secret=SECRET_KEY_HERE</code>
        <br />
        The password will be saved to the browsing session as long as you don't refresh the page.
      </div>
    )
  }
}
