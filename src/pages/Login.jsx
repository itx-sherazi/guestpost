import React, { useState } from "react";
// import axios from "axios";  // Uncomment when API is ready

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Example API call (commented)
    /*
    axios.post("https://api.example.com/login", formData)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
    */
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-[450px] p-8">
        <h2 className="text-xl font-semibold mb-6 text-center">Log in to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="mail@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <p className="text-xs text-gray-500">It is necessary to fill in</p>

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <span className="text-blue-600 cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

          {/* Signup link */}
          <p className="text-sm text-center mt-2">
            Still have no account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
