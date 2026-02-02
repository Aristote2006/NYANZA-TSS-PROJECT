import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <AdminNavbar currentPath={window.location.pathname} />
      <div style={{ paddingTop: '70px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;