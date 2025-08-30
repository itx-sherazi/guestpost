// src/layouts/PublisherLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/publisher/Sidebar";
import Header from "../pages/publisher/Header";

function PublisherLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header top full width */}
      <div className="relative ">
        <Header />
      </div>

      {/* Sidebar + Page Content */}
      <div className="flex flex-1 ">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PublisherLayout;