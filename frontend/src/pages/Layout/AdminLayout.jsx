import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";

function AdminLayout() {
  return (
    <div className="max-w-100s">
      <div className="flex flex-col min-h-screen justify-between">
        <HeaderAdmin />
        <Outlet />
        <FooterAdmin />
      </div>
    </div>
  );
}

export default AdminLayout;
