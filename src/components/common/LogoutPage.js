import React from 'react';
import { Link } from 'react-router';

const LogoutPage = () => {
  return (
    <div>
      <h4>
      ROVR Portal Logout
      </h4>
        You have been logged-out. Click <Link to="/"> here </Link> to login again.
    </div>
  );
};

export default LogoutPage;
