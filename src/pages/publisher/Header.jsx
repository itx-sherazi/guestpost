import React, { useState } from "react";
import { Bell, Mail, User, LogOut, Globe, Wallet, Home } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();

  const getBoxContent = () => {
    if (location.pathname.includes("home")) return "My Home Dashboard";
    if (location.pathname.includes("websites")) return "My Websites";
    if (location.pathname.includes("sales")) return "Sales Overview";
    if (location.pathname.includes("promotions")) return "Promotions";
    if (location.pathname.includes("wallet")) return "Wallet Balance";
    if (location.pathname.includes("contact")) return "Contact Support";
    return "Welcome Back, Publisher!";
  };

  return (
    <header className="w-full bg-[#E86B4D] text-white px-6 py-3 flex items-center justify-between relative ">
      {/* Left: Logo */}
      <div className="flex items-center gap-3 relative">
        <img src={logo} alt="logo" className="w-16 h-16 rounded-full" />

        {/* 🔥 Floating Box Over Logo */}
        <div className="absolute top-14  ml-55 w-[1000px] z-50">
          <div className="bg-white shadow-xl rounded-2xl px-4 py-2 text-center text-black font-semibold">
            <h2 className="text-sm md:text-base text-[#E86B4D]">
              {getBoxContent()}
            </h2>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6 relative">
        {/* Notifications */}
        <div className="relative z-50">
          <button
            onClick={() => {
              setShowNotif(!showNotif);
              setShowMsg(false);
              setShowProfile(false);
            }}
            className="relative"
          >
            <Bell className="w-6 h-6 cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs px-1 rounded-full">
              3
            </span>
          </button>
          {showNotif && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-3 z-50">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <p className="text-sm">🔔 New order received</p>
              <p className="text-sm">🔔 Payment successful</p>
              <p className="text-sm">🔔 Profile updated</p>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="relative z-50">
          <button
            onClick={() => {
              setShowMsg(!showMsg);
              setShowNotif(false);
              setShowProfile(false);
            }}
          >
            <Mail className="w-6 h-6 cursor-pointer" />
          </button>
          {showMsg && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-3 z-50">
              <h3 className="font-semibold mb-2">Messages</h3>
              <p className="text-sm">📩 Client: Please update my order</p>
              <p className="text-sm">📩 Support: Your request approved</p>
            </div>
          )}
        </div>

        {/* Balance */}
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Balance:</span>
          <div className="border border-black text-black px-3 py-1 rounded-md bg-white cursor-pointer">
            <span className="font-bold">153.71 USD</span>
          </div>
        </div>

        {/* Profile */}
        <div className="relative z-50">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotif(false);
              setShowMsg(false);
            }}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            />
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-3 z-50">
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <User className="w-4 h-4" /> My Profile
              </div>
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <Home className="w-4 h-4" /> My Websites
              </div>
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <Wallet className="w-4 h-4" /> Wallet
              </div>
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <Globe className="w-4 h-4" /> Language
              </div>
              <div className="flex items-center gap-2 text-red-600 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <LogOut className="w-4 h-4" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
