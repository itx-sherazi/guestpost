// src/layouts/PublisherLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/publisher/Sidebar";
import Header from "../pages/publisher/Header";
import Footer from "../pages/publisher/Footer";

function PublisherLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header top full width */}
      <div className="relative">
        <Header />
      </div>

      {/* Sidebar + Page Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed, no scroll) */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Page Content + Footer (scroll together) */}
        <div className="flex-1 bg-[#f3f3f9] overflow-y-auto p-14">
          {/* Outlet renders page content */}
          <Outlet />

          {/* Footer renders below page content */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PublisherLayout;
