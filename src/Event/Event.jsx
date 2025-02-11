import React, { useState } from "react";
import axios from "axios";
import "./Event.css";

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    link: "",
    heading: "",
    date: "",
    title: "",
    para: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/event/add`,
        eventData
      );
      if (response.status === 201) {
        setSuccess(response.data.message);
        setError("");
        setEventData({
          link: "",
          heading: "",
          date: "",
          title: "",
          para: "",
        });
      }
    } catch (error) {
      setError("Error adding event. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Event</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label className="form-label">Link:</label>
          <input
            type="text"
            name="link"
            value={eventData.link}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Heading:</label>
          <input
            type="text"
            name="heading"
            value={eventData.heading}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Paragraph:</label>
          <textarea
            name="para"
            value={eventData.para}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
