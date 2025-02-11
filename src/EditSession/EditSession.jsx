import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditSession.css";

const EditSession = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session } = location.state; // Extract the session from state

  const [formData, setFormData] = useState(session);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/register/link/${formData._id}`,
        formData
      );
      setMessage(response.data.message);
      alert("Session updated successfully");
      navigate("/sessions"); // Redirect back to sessions page
    } catch (error) {
      setMessage("Error updating session");
      console.error(error);
    }
  };

  return (
    <div className="edit-session">
      <h2>Edit Session</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Heading:</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Link:</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Update Session
        </button>
      </form>
    </div>
  );
};

export default EditSession;
