import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

function AdminLayout() {
  return (
    <div className="max-w-100s">
      <div className="flex h-screen">
        <HeaderAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
