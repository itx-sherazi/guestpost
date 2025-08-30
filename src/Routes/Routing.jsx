// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import React from "react";
// import AdvertiserDashboard from "../pages/adviser/AdviserDashboard";
// import PublisherDashboard from "../pages/publisher/PublisherDashboard";

// function Routing() {
//   const [user, setUser] = useState(null);

//   // load user from localStorage
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>

//         {!user ? (
//           <>
//             <Route path="/signup" element={<Signup setUser={setUser} />} />
//             <Route path="/login" element={<Login setUser={setUser} />} />
//             <Route path="*" element={<Navigate to="/signup" />} />
//           </>
//         ) : (
//           <>
//             {user.role === "advertiser" && (
//               <Route path="/advertiser" element={<AdvertiserDashboard />} />
//             )}
//             {user.role === "publisher" && (
//               <Route path="/publisher" element={<PublisherDashboard/>} />
//             )}
//             <Route
//               path="*"
//               element={
//                 <Navigate
//                   to={user.role === "advertiser" ? "/advertiser" : "/publisher"}
//                 />
//               }
//             />
//           </>
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Routing;
// src/components/Routing.jsx
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import PublisherLayout from "../layouts/PublisherLayout";

// Pages
import Websites from "../pages/publisher/websites/Websites";
import Sales from "../pages/publisher/sales/Sales";
import Promotions from "../pages/publisher/promotions/Promotions";
import Wallet from "../pages/publisher/wallet/Wallet";
import Contact from "../pages/publisher/contact/Contact";
import Home from "../pages/publisher/home/Home";
import ConfirmOnship from "../pages/publisher/confirmOS/ConfirmOnship";
import DescriptionPricePage from "../pages/publisher/descriptionPricePage/DescriptionPricePage";
import EarnSuccessPage from "../pages/publisher/earnSuccessPage/EarnSuccessPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Publisher routes wrapped in PublisherLayout */}
        <Route path="/publisher" element={<PublisherLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="websites" element={<Websites />} />
          <Route path="sales" element={<Sales />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="contact" element={<Contact />} />
          <Route path="confirmOwnership" element={<ConfirmOnship />} />
          <Route path="DescriptionPrice" element={<DescriptionPricePage />} />
          <Route path="earn" element={<EarnSuccessPage />} />
        </Route>
        
        {/* Redirect root to publisher */}
        <Route path="*" element={<Navigate to="/publisher" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;