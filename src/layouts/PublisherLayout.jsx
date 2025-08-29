// src/layouts/PublisherLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/publisher/Sidebar";
import Header from "../pages/publisher/Header";

function PublisherLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header top full width */}
      <div>
        <Header />
      </div>

      {/* Sidebar + Page Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div >
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="p-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PublisherLayout;
