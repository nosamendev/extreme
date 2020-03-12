import React from 'react';
import './Layout.css';

const Layout = props => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
