import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
import { GiManualJuicer } from "react-icons/gi";
import { ListCheckIcon } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  // Auto-close on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) { // you can adjust this breakpoint
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/publisher/home", label: "Home", icon: <FaHome /> },
    { to: "/publisher/addweb", label: "Websites", icon: <ListCheckIcon /> },
    { to: "/publisher/websites", label: "Websites", icon: <FaGlobe /> },
    { to: "/publisher/sales", label: "Sales", icon: <FaShoppingCart /> },
    { to: "/publisher/promotions", label: "Promotions", icon: <FaTags /> },
    { to: "/publisher/wallet", label: "Wallet", icon: <FaWallet /> },
    { to: "/publisher/contact", label: "Contact", icon: <FaHeadset /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-56" : "w-20"
      } bg-[#E86B4D] text-white h-screen p-4 flex flex-col transition-all duration-300 relative`}
    >
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

        {/* New Website Button - Contact ke niche */}
        <button
          className={`flex items-center gap-2 mt-2 px-9 py-2 bg-white text-[#E86B4D] rounded-lg font-medium`}
        >
          <FaPlus />
          {isOpen && "New Website"}
        </button>
      </nav>
    </div>
  );
}
