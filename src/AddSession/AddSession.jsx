import React, { useState } from "react";
import "./AddSession.css";
import axios from "axios";

const AddSession = () => {
  const [formData, setFormData] = useState({
    link: "",
    heading: "",
    date: "",
    time: "",
    name: "",
    title: "",
    type: "",
  });

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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register/link`,
        formData
      );
      setMessage(response.data.message);
      setFormData({
        link: "",
        heading: "",
        date: "",
        time: "",
        name: "",
        title: "",
        type: "",
      });
      alert("Session added successfully");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding session");
      alert("Error adding session");
    }
  };

  return (
    <div className="add-session">
      <h2>Add Session</h2>
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
          Add Session
        </button>
      </form>
    </div>
  );
};

export default AddSession;
