import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const api = "http://localhost:8080/admin/adminlogin";
    try {
      const response = await axios.post(api, input);
      console.log(response.data.msg);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data?.msg1 || "Login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <h2 className="login-title">
          <FaUserShield className="login-icon" /> Admin Login
        </h2>

        <div className="form-group">
          <label htmlFor="adminid">Admin ID</label>
          <input
            type="text"
            name="adminid"
            placeholder="Enter Admin ID"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleInput}
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          <FaLock className="btn-icon" /> Submit
        </button>
      </div>
    </div>
  );
};

export default AdminLogin