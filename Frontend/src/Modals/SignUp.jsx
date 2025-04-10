import React, { useState } from "react";
import axios from "axios";

const SignUpModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMessage("");
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post("https://zomato-clone-c8ni.onrender.com/register", {
        user:name,
        email,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        toggleModal();
        setTimeout(() => {
          alert("Registration Successfull");
        }, 1000);
      } else {
        setMessage(response.data.message || "Sign Up failed. Please try again.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <button className="login-btn" onClick={toggleModal}>
        Sign Up
      </button>

      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal">
            <button className="close-btn" onClick={toggleModal}>
              ×
            </button>
            <form onSubmit={handleLogin}>
            <div className="form-group">
              <h2 className="Log-Title">Sign Up</h2>
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            {loading && <div className="loading-spinner"></div>}
            {message && <p className={`message ${loading ? "loading" : ""}`}>{message}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default SignUpModal;
