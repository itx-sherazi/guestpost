import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaGlobe,
  FaShoppingCart,
  FaTags,
  FaWallet,
  FaHeadset,
  FaPlus,
} from "react-icons/fa";
import React from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const links = [
    { to: "/publisher/home", label: "Home", icon: <FaHome /> },
    { to: "/publisher/websites", label: "Websites", icon: <FaGlobe /> },
    { to: "/publisher/sales", label: "Sales", icon: <FaShoppingCart /> },
    { to: "/publisher/promotions", label: "Promotions", icon: <FaTags /> },
    { to: "/publisher/wallet", label: "Wallet", icon: <FaWallet /> },
    { to: "/publisher/contact", label: "Contact", icon: <FaHeadset /> },
  ];

  // Box ke andar ka content route ke hisaab se change hoga
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
    <div
      className={`${
        isOpen ? "w-56" : "w-20"
      } bg-[#E86B4D] text-white h-screen p-4 flex flex-col transition-all duration-300 relative`}
    >
      {/* 🔥 Floating Box Over Header */}
      <div className="absolute -top-4 left-[110%] w-[1000px] z-50">
        <div className="bg-white shadow-xl rounded-2xl p-4 text-center text-black font-semibold ">
          <h2 className="text-lg text-[#E86B4D]">{getBoxContent()}</h2>
        </div>
      </div>

      {/* Top Hamburger */}
      <button className="text-2xl mb-6" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      {/* Nav Links */}
      <nav className="flex-1 space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "bg-white text-[#E86B4D]" : "hover:bg-white/20"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {isOpen && <span>{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Button */}
      <button
        className={`flex items-center gap-2 mt-6 px-3 py-2 bg-white text-[#E86B4D] rounded-lg font-medium`}
      >
        <FaPlus />
        {isOpen && "New Website"}
      </button>
    </div>
  );
}
