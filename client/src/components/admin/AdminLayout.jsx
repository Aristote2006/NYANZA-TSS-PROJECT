import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar currentPath={window.location.pathname} />
      <Outlet />
    </>
  );
};

export default AdminLayout;