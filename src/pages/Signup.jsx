import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = () => {
  const [role, setRole] = useState("advertiser");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    currency: "Dollar",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, role);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-[450px] p-8">
        <h2 className="text-xl font-semibold mb-6 text-center">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="mail@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option>Dollar</option>
            <option>Euro</option>
            <option>PKR</option>
          </select>

          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            inputClass="!w-full !h-[42px]"
          />

          {/* Role Selection */}
          <div>
            <p className="mb-2">Choose your role</p>
            <div className="flex gap-6">
              <div
                onClick={() => setRole("advertiser")}
                className="cursor-pointer rounded-lg p-3 w-1/2 text-center"
              >
                <img
                  src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756321370/customer_ocrgrt.png"
                  alt="Advertiser"
                  className={`mx-auto w-20 ${
                    role === "advertiser" ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`mt-2 ${
                    role === "advertiser"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Advertiser (to buy)
                </p>
              </div>

              <div
                onClick={() => setRole("publisher")}
                className="cursor-pointer rounded-lg p-3 w-1/2 text-center"
              >
                <img
                  src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1756321370/owner_ardrog.png"
                  alt="Publisher"
                  className={`mx-auto w-20 ${
                    role === "publisher" ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`mt-2 ${
                    role === "publisher"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Publisher (to sell)
                </p>
              </div>
            </div>
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign up
          </button>

          <p className="text-xs text-gray-500 mt-2 text-center">
            By clicking Sign up, you confirm that you have read and accept the{" "}
            <span className="text-blue-600 cursor-pointer">Terms of Use</span>
          </p>

          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
